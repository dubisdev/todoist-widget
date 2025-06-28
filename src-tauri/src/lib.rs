use tauri::tray::{MouseButton, MouseButtonState, TrayIconEvent};
use tauri::{App, AppHandle, Manager};

use tauri::menu::{MenuBuilder, MenuItemBuilder};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            configure_tray_menu(&app)?;

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn configure_tray_menu(app: &App) -> Result<(), tauri::Error> {
    let quit = MenuItemBuilder::new("Quit".to_string())
        .id("quit")
        .build(app)?;
    let toggle = MenuItemBuilder::new("Toggle".to_string())
        .id("toggle")
        .build(app)?;

    let tray_menu = MenuBuilder::new(app).items(&[&toggle, &quit]).build()?;

    let tray_icon = app.tray_by_id("main").unwrap();

    tray_icon.set_menu(Some(tray_menu))?;

    tray_icon.on_menu_event(|app, event| match event.id.as_ref() {
        "quit" => std::process::exit(0),
        "toggle" => toggle_window(app),
        _ => {}
    });

    tray_icon.on_tray_icon_event(|tray, event| {
        if let TrayIconEvent::Click {
            button: MouseButton::Left,
            button_state: MouseButtonState::Up,
            ..
        } = event
        {
            let app = tray.app_handle();
            toggle_window(app);
        }
    });

    Ok(())
}

fn toggle_window(app: &AppHandle) {
    let window = app.get_webview_window("main").unwrap();
    if window.is_visible().unwrap() {
        window.hide().unwrap();
        return;
    } else {
        window.show().unwrap();
        window.set_focus().unwrap();

        return;
    }
}
