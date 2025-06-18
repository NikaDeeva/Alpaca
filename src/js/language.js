"use strict"
const eng = document.querySelector('#eng');
const ua = document.querySelector('#ua');

function turnUa(){
    const headerLink = document.querySelectorAll('.header__link');
headerLink[0].textContent = "Хто такі альпаки?";
    headerLink[1].textContent = "Навіщо придбати";
    headerLink[2].textContent = "Обрати тваринку";
     headerLink[3].textContent = "Фотогалерея";

    document.querySelector('.header__title').textContent = "Альпаки";
    document.querySelector('.header__description').textContent = "Продажа неймовірних тварин";
    document.querySelector('.header__button').textContent = "Дізнатися більше";
    document.querySelector('.header__video').textContent = "Відео про Альпак";

    document.querySelector('.who__title').textContent = "Хто такі альпаки?";
    document.querySelector('.who__text').textContent = "Альпака - це американська домашня тварина сімейства верблюдові. Альпака мешкають в Андах на висоті 3500-5000 метрів, на території Еквадору, південного Перу, північного Чилі та західної Болівії. Одомашнили цих істот близько 6000 років тому індіанці Перу. Насамперед альпака цінується за свою шерсть, з якої виробляють ковдри, одяг та багато іншого.";
    
    const whoQualities = document.querySelectorAll('.who__subtitle');
    whoQualities[0].textContent = "Вовна";
    whoQualities[1].textContent = "Тривалість життя";
    whoQualities[2].textContent = "Вага тварини";
    whoQualities[3].textContent = "Основна якість";

const whoData = document.querySelectorAll('.who__data');
    whoData[0].textContent = "24 натуральних відтінка";
    whoData[1].textContent = "Приблизно 25 років";
    whoData[2].textContent = "Приблизно 70 кг";
    whoData[3].textContent = "Благородство";

    document.querySelector('.owner__title').textContent = "Стань господарем чудової тваринки!"
    document.querySelector('.owner__button').textContent = "Хочу Альпаку!";

    document.querySelector('.benefits__title').textContent = "Чому варто придбати альпаку?";
    const benefitsSubtitle = document.querySelectorAll('.benefits__subtitle');
    benefitsSubtitle[0].textContent = "Цінні вовна";
    benefitsSubtitle[1].textContent = "Простий уход та утримання";
    benefitsSubtitle[2].textContent = "Жива плюшова іграшка";
    benefitsSubtitle[3].textContent = "Доброзичливий і милий вихованець";
    const benefitsText = document.querySelectorAll('.benefits__text');
    benefitsText[0].textContent = "Вона відрізняється чистотою, тонким волокном та міцністю.";
    benefitsText[1].textContent = "Необхідно забезпечити їх кормом, водою та спорудити загороду з навісом або надати інше укриття (чисте, неопалюване приміщення) на випадок негоди.";
    benefitsText[2].textContent = "Альпаки чудово ладнають з людьми, Можуть брати участь в іграх з дітьми-інвалідами, прикрашати самотність людям похилого віку.";
    benefitsText[3].textContent = "Альпака досить мила і смішна тварина, з якою можна проводити час, забувши про проблеми та турботи. З придбанням альпаки ви набуваєте позитивного друга, здатного щодня дарувати посмішку.";

    document.querySelector('.wool__title').textContent = "В чому цінність вовна альпаки?";
  const woolSubtitle = document.querySelectorAll('.wool__subtitle');
    woolSubtitle[0].textContent = "Кольорова гамма";
    woolSubtitle[1].textContent = "Гіпоалергенність";
    woolSubtitle[2].textContent = "Любов дизайнерів";
    woolSubtitle[3].textContent = "Любов спортсменів";
    woolSubtitle[4].textContent = "Якісні вироби";
    woolSubtitle[5].textContent = "Тонкість і легкість";
    woolSubtitle[6].textContent = "Міцність";
    const woolText = document.querySelectorAll('.wool__text');
    woolText[0].textContent = "Вовна альпаки має 24 натуральні відтінки - від чисто білого, традиційно-бежевого або срібного - до коричневого і навіть чорного.";
    woolText[1].textContent = "Волокно вовни альпаки не має ланоліну, що робить його гіпоалергенним";
    woolText[2].textContent = "Дизайнер Джорджіо Армані використовував шерсть альпакі сурі у модних чоловічих та жіночих костюмах.";
    woolText[3].textContent = "Любителі спорту визнають, що вироби з альпаки легші і тепліші, комфортніші в холодну погоду, тому виробники спортивного та верхнього одягу починають закуповувати більше продукції з альпаки.";
    woolText[4].textContent = "Основний плюс виробів із вовни альпаки полягає в тому, що на них практично не утворюються катишки – довгі волокна перешкоджають зваленню.";
    woolText[5].textContent = "Вона не затримує воду, тепла навіть у вологому стані та може ефективно протистояти сонячному випромінюванню.";
    woolText[6].textContent = "Вовна альпака втричі міцніша і в сім разів тепліша, ніж вовна вівці.";

    document.querySelector('.buy__title').textContent = "Встигни купити свого вихованця за найкращою ціною!"
    document.querySelector('.buy__button').textContent = "Купити Альпаку!";

    document.querySelector('.choose__title').textContent = "Обери собі друга";
    const chooseCharact = document.querySelectorAll('.choose__charact');
    chooseCharact[0].textContent = "Ім'я";
    chooseCharact[4].textContent = "Ім'я";
    chooseCharact[8].textContent = "Ім'я";
    chooseCharact[12].textContent = "Ім'я";
    chooseCharact[16].textContent = "Ім'я";
    chooseCharact[20].textContent = "Ім'я";
    chooseCharact[1].textContent = "Вік";
    chooseCharact[5].textContent = "Вік";
    chooseCharact[9].textContent = "Вік";
    chooseCharact[13].textContent = "Вік";
    chooseCharact[17].textContent = "Вік";
    chooseCharact[21].textContent = "Вік";
    chooseCharact[2].textContent = "Вид";
    chooseCharact[6].textContent = "Вид";
    chooseCharact[10].textContent = "Вид";
    chooseCharact[14].textContent = "Вид";
    chooseCharact[18].textContent = "Вид";
    chooseCharact[22].textContent = "Вид";
    chooseCharact[3].textContent = "Особливість";
    chooseCharact[7].textContent = "Особливість";
    chooseCharact[11].textContent = "Особливість";
    chooseCharact[15].textContent = "Особливість";
    chooseCharact[19].textContent = "Особливість";
    chooseCharact[23].textContent = "Особливість";

     const chooseData = document.querySelectorAll('.choose__data');
    chooseData[0].textContent = "Макс";
    chooseData[4].textContent = "Ліана";
    chooseData[8].textContent = "Крістіан";
    chooseData[12].textContent = "Річі";
    chooseData[16].textContent = "Ліліан";
    chooseData[20].textContent = "Бусінка";
    chooseData[1].textContent = "6 років";
    chooseData[5].textContent = "3,5 роки";
    chooseData[9].textContent = "2 роки";
    chooseData[13].textContent = "1,5 роки";
    chooseData[17].textContent = "4 роки";
    chooseData[21].textContent = "2,5 роки";
    chooseData[2].textContent = "Сурі";
    chooseData[6].textContent = "Сурі";
    chooseData[10].textContent = "Уакайа";
    chooseData[14].textContent = "Сурі";
    chooseData[18].textContent = "Уакайа";
    chooseData[22].textContent = "Сурі";
    chooseData[3].textContent = "улюблені ласощі - сіно";
    chooseData[7].textContent = "любить дітей";
    chooseData[11].textContent = "обожнює фотосессії";
    chooseData[15].textContent = "дуже грайливий";
    chooseData[19].textContent = "любить танцювати під Scorpions";
    chooseData[23].textContent = "полюбляє обійми";
    const chooseLink = document.querySelectorAll('.choose__link');
    chooseLink[0].textContent = 'Дивитись фото з Максом';
    chooseLink[1].textContent = 'Дивитись фото з Ліаною';
    chooseLink[2].textContent = 'Дивитись фото з Крістіаном';
    chooseLink[3].textContent = 'Дивитись фото з Річі';
    chooseLink[4].textContent = 'Дивитись фото з Ліліаном';
    chooseLink[5].textContent = 'Дивитись фото з Бусінкою';
    const chooseButton = document.querySelectorAll('.choose__button');
    chooseButton[0].textContent = 'Хочу Макса!';
    chooseButton[1].textContent = 'Хочу Ліану!';
    chooseButton[2].textContent = 'Хочу Крістіана!';
    chooseButton[3].textContent = 'Хочу Річі!';
    chooseButton[4].textContent = 'Хочу Ліліана!';
    chooseButton[5].textContent = 'Хочу Бусінку!';

    document.querySelector('.gallery__title').textContent = "Фотогалерея";

    const footerLink = document.querySelectorAll('.footer__link');
    footerLink[0].textContent = "Про нас";
    footerLink[1].textContent = "Статті";
    footerLink[2].textContent = "Ліцензії";
    document.querySelector('.footer__contacts-title').textContent = "Контакти";
}
ua.addEventListener('click', turnUa);