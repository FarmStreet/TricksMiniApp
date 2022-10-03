import bridge from '@vkontakte/vk-bridge';

export function share() {
    let text = "Я тренируюсь, я молодец";

    bridge.send('VKWebAppShowWallPostBox', {
      "message": text,
    });
}