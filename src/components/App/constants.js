/*import * as bogomol from "../../img/bogomol.png";
import * as boomerang from "../../img/boomerang.png";
import * as charge from "../../img/charge.png";
import * as crush from "../../img/crush.png";
import * as gyrocopter from "../../img/gyrocopter.png";
import * as jumpcharge from "../../img/jumpcharge.png";
import * as kick from "../../img/kick.png";
import * as punch from "../../img/punch.png";
import * as reverse from "../../img/reverse.png";
import * as reversekick from "../../img/reversekick.png";
import * as rock from "../../img/rock.png";
import * as skullbreaker from "../../img/skullbreaker.png";
import * as stopper from "../../img/stopper.png";
import * as tree from "../../img/tree.png";
import * as twine from "../../img/twine.png";*/

export const APP_ID = 7361081;

/*

* level
* 1 - новичок
* 2 - средний
* 3 - продвинутый
* 2 - профи
* */

/*
* progress
* 1 - не умею
* 2 - учу
* 3 - умею
* */

/*export const TRICK_LIST = [
  {
    id: '1',
    name: 'Богомол',
    level: 3,
    progress: 1,
    img: bogomol,
    desc: 'Устрашите своего противника, после удушите его ногами',
  },
  {
    id: '2',
    name: 'Бумеранг',
    level: 4,
    progress: 1,
    img: boomerang,
    desc: 'Резко подымите ногу вверх, и нанесите сокрушительный удар пяткой',
  },
  {
    id: '3',
    name: 'Рывок',
    level: 2,
    progress: 1,
    img: charge,
    desc: 'Обескуражьте противника рывком',
  },
  {
    id: '4',
    name: 'Громила',
    level: 1,
    progress: 1,
    img: crush,
    desc: 'В упор вбейте врага в землю',
  },
  {
    id: '5',
    name: 'Вертолет',
    level: 3,
    progress: 1,
    img: gyrocopter,
    desc: 'Вращаясь, наносите серию опасных ударов, защищая себя со всех сторон',
  },
  {
    id: '6',
    name: 'Прыжковый рывок',
    level: 2,
    progress: 1,
    img: jumpcharge,
    desc: 'Будьте словно очень тяжелый шмель',
  },
  {
    id: '7',
    name: 'Пинок',
    level: 1,
    progress: 1,
    img: kick,
    desc: 'Обычный пинок ногой',
  },
  {
    id: '8',
    name: 'Удар',
    level: 1,
    progress: 1,
    img: punch,
    desc: 'Обычный удар кулаком',
  },
  {
    id: '9',
    name: 'Крыша',
    level: 4,
    progress: 1,
    img: reverse,
    desc: 'Защитите себя от дождя и друзей',
  },
  {
    id: '10',
    name: 'Обратный пинок',
    level: 3,
    progress: 1,
    img: reversekick,
    desc: 'Тяжелый и обескураживающий пинок двумя ногами',
  },
  {
    id: '11',
    name: 'Камень',
    level: 4,
    progress: 1,
    img: rock,
    desc: 'Влетите во врага, нанеся ему чудовищный ущерб',
  },
  {
    id: '12',
    name: 'Апперкот',
    level: 2,
    progress: 1,
    img: skullbreaker,
    desc: 'Быстрый удар в челюсть снизу',
  },
  {
    id: '13',
    name: 'Сбиватель',
    level: 2,
    progress: 1,
    img: stopper,
    desc: 'Сбейте дыхание врагу и вспомните монахов',
  },
  {
    id: '14',
    name: 'Древо',
    level: 3,
    progress: 1,
    img: tree,
    desc: 'Будь крепок как древо',
  },
  {
    id: '15',
    name: 'Шпагат',
    level: 2,
    progress: 1,
    img: twine,
    desc: 'Простой шпагат',
  },
];*/

export const TRICK_LIST = [
  {
    id: '1',
    name: 'Аиша',
    alt_name: '',
    eng_name: 'Ayesha',
    level: 3,
    img: 'https://i.pinimg.com/originals/3d/46/5c/3d465c003c5b3bf5bb1dc3ef38e5ef62.jpg',
    desc: 'Разновидность "флага". Необходимо выйти в «Рогатку», затем в «Пожарника», ' +
      'ближнюю руку опустить вниз с присогнутым локтем и вытолкнуть себя в «Гусеничку» ' +
      '(таз оторван от пилона), затем второй рукой цепляемся локтем за пилон перпендикулярно ' +
      'ему, немного отводим таз назад и раскрываем ноги',
  },
  {
    id: '2',
    name: 'Задний планш',
    alt_name: '',
    eng_name: 'Planch',
    level: 3,
    img: 'https://poleanddance.ch/wp-content/uploads/2018/01/Iguana-Planche-bearbeitet-Kopie.jpg',
    desc: 'Залезаем на пилон любым удобным способом. Наклоняем корпус вперёд, обе руки ставим на пилон ' +
      '«кольцом вверх», дальняя от пилона рука находится снизу. По очереди вытягиваем ноги назад, ' +
      'корпус вместе с ногами должен быть чётко параллельно полу.',
  },
  {
    id: '3',
    name: 'Мост',
    alt_name: 'Bridge (Cross Ankle Release, Full moon)',
    eng_name: 'Банан, Полнолуние',
    level: 2,
    img: 'https://i.pinimg.com/originals/30/be/5d/30be5d878b01202f1021a4c397b369a9.jpg',
    desc: 'Сначала нужно забраться на середину шеста и обхватить его ногами (шест – посередине). ' +
      'С прямыми напряженными ногами и натянутыми носочками медленно опускаем корпус вниз. ' +
      'После этого руками хватаемся за шест и поднимаем их как можно выше, при этом тянутся ' +
      'плечи и грудь. Фиксируем данное положение',
  },
  {
    id: '4',
    name: 'Тюльпан',
    alt_name: '',
    eng_name: 'Tulip',
    level: 2,
    img: 'https://oyebesmartest.com/public/uploads/preview/pole-dance-lady-png--(45)imwwdkvydb.png',
    desc: 'Верхняя рука в ленточном хвате, нижняя в распоре, кольцом вниз. ' +
      'Требуется вымахнуть ногой от пилона и развернуть корпус грудью вверх, прогнуться в спине. ' +
      'Обе руки держать прямыми, ноги прямые вместе, либо согнуть в колене одну',
  },
  {
    id: '5',
    name: 'Бильман',
    alt_name: '',
    eng_name: 'Bielmann',
    level: 2,
    img: 'https://natali.ua/upload/iblock/e14/e14e88dc669804f3bed66306cc134384.jpg',
    desc: 'Необходимо стоять на одной ноге (можно прислониться к стене или к шесту, чтобы не терять равновесие).' +
      'Далее рукой беремся за свободную ногу, вытягиваем колено, сгибаемся в пояснице, фиксируем данное положение',
  },
  {
    id: '6',
    name: 'Дива',
    alt_name: 'Шпагат вдоль пилона',
    eng_name: 'Split Diva, Front Split, Diva Onpole Split',
    level: 2,
    img: 'https://avatars.mds.yandex.net/get-pdb/27625/f077f1ef-ccea-43c2-852d-1ee94ccf6de2/s1200?webp=false\n',
    desc: 'Чтобы выполнить элемент, сначала нужно выйти в рогатку, зацепиться дальней ногой за пилон, ' +
      'перехватиться руками сверху дальней ноги и другую ногу поставить вдоль пилона, упираясь на него стопой. ' +
      'Затем одноименной рукой взяться за голеностоп верхней ноги и отвести корпус назад, прогибаясь в спине',
  },
  {
    id: '7',
    name: 'Птичка',
    alt_name: '',
    eng_name: 'Peter Pan sit, Diva sit, Swan variation',
    level: 1,
    img: 'https://avatars.mds.yandex.net/get-pdb/27625/f077f1ef-ccea-43c2-852d-1ee94ccf6de2/s1200?webp=false',
    desc: 'Выполняется на любой высоте пилона. Сначала нужно подняться/подтянуться по пилону и сесть на него, ' +
      'зажимая пилон между ног, одно бедро чуть поднять. Одну ногу согнуть в колене, вторую выпрямить. ' +
      'Корпус вывести перед пилоном и ближнюю руку положить сверху на ногу. Вторая рука может быть в любой свободной вариации',
  },
  {
    id: '8',
    name: 'Паук',
    alt_name: 'Наездница',
    eng_name: 'Horsewoman',
    level: 1,
    img: 'https://whitezefir.ru/d/e7owticlnd4.jpg',
    desc: 'Выполняется из виса на дальней ноге. Далее вам следует подтянуться наверх и перекинуть вторую ногу перед пилоном, зацепившись ею под колено',
  },
  {
    id: '9',
    name: 'Старфиш',
    alt_name: 'Морская звезда',
    eng_name: 'Star fish',
    level: 3,
    img: 'https://i.pinimg.com/originals/d3/2b/e0/d32be079e0954daa8057f8ce7e112075.jpg',
    desc: 'Для начала следует научиться выполнять элемент с пола. Упритесь дальней ногой в основание пилона и ' +
      'зацепите носочком ближней ноги пилон примерно на уровне головы. Колено верхней ноги стоит развернуть к потолку, ' +
      'чтобы увеличить сцепление. Если вы чувствуете, что держитесь, отпустите руки: сначала нижнюю, затем верхнюю. ' +
      'Важно: Элемент довольно сложен и болезнен, поэтому стоит его тренировать, когда уровень вашего пилонного мастерства ' +
      'уже достаточно высок. Выполняя трюк не с пола, а с пилона, обязательно постелите мат или попросите друга подстраховать вас.',
  },
];