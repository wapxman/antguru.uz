// Сидер категорий услуг для antguru.uz
// Запуск: tsx packages/db/prisma/seeds/categories.ts
//
// Реальное дерево с учётом узбекского рынка. Два уровня: корневые рубрики + подкатегории.

import { prisma } from '../../src';

type SeedCategory = {
  slug: string;
  nameRu: string;
  nameUz: string;
  icon?: string;
  children?: SeedCategory[];
};

const TREE: SeedCategory[] = [
  {
    slug: 'remont-i-stroitelstvo',
    nameRu: 'Ремонт и строительство',
    nameUz: 'Ta’mir va qurilish',
    icon: 'hammer',
    children: [
      { slug: 'remont-kvartir', nameRu: 'Ремонт квартир и комнат', nameUz: 'Xonadon va xonalarni ta’mirlash' },
      { slug: 'santehnik', nameRu: 'Сантехник', nameUz: 'Santexnik' },
      { slug: 'elektrik', nameRu: 'Электрик', nameUz: 'Elektr ustasi' },
      { slug: 'masterskiy-muzh-na-chas', nameRu: 'Муж на час', nameUz: 'Soatbay usta' },
      { slug: 'natyazhnye-potolki', nameRu: 'Натяжные потолки', nameUz: 'Tortiladigan shiftlar' },
      { slug: 'kondicionery', nameRu: 'Кондиционеры и вентиляция', nameUz: 'Konditsioner va shamollatish' },
      { slug: 'okna-dveri', nameRu: 'Окна и двери', nameUz: 'Deraza va eshiklar' },
      { slug: 'mebel-sborka', nameRu: 'Сборка мебели', nameUz: 'Mebel yig‘ish' },
    ],
  },
  {
    slug: 'repetitory',
    nameRu: 'Репетиторы и обучение',
    nameUz: 'Repetitorlar va o‘qitish',
    icon: 'book-open',
    children: [
      { slug: 'angliyskiy', nameRu: 'Английский язык', nameUz: 'Ingliz tili' },
      { slug: 'russkiy', nameRu: 'Русский язык', nameUz: 'Rus tili' },
      { slug: 'matematika', nameRu: 'Математика', nameUz: 'Matematika' },
      { slug: 'fizika-himiya', nameRu: 'Физика и химия', nameUz: 'Fizika va kimyo' },
      { slug: 'it-programmirovanie', nameRu: 'IT и программирование', nameUz: 'IT va dasturlash' },
      { slug: 'muzyka', nameRu: 'Музыка', nameUz: 'Musiqa' },
      { slug: 'podgotovka-k-ege', nameRu: 'Подготовка к экзаменам', nameUz: 'Imtihonga tayyorgarlik' },
    ],
  },
  {
    slug: 'krasota-zdorove',
    nameRu: 'Красота и здоровье',
    nameUz: 'Go‘zallik va sog‘liq',
    icon: 'sparkles',
    children: [
      { slug: 'manikyur', nameRu: 'Маникюр и педикюр', nameUz: 'Manikyur va pedikyur' },
      { slug: 'parikmaher', nameRu: 'Парикмахер', nameUz: 'Sartarosh' },
      { slug: 'kosmetolog', nameRu: 'Косметолог', nameUz: 'Kosmetolog' },
      { slug: 'makeup', nameRu: 'Макияж', nameUz: 'Makiyaj' },
      { slug: 'massazh', nameRu: 'Массаж', nameUz: 'Massaj' },
      { slug: 'brovi-resnicy', nameRu: 'Брови и ресницы', nameUz: 'Qosh va kipriklar' },
    ],
  },
  {
    slug: 'klining',
    nameRu: 'Уборка и клининг',
    nameUz: 'Tozalash va kliningg',
    icon: 'droplets',
    children: [
      { slug: 'uborka-kvartir', nameRu: 'Уборка квартир', nameUz: 'Xonadonlarni tozalash' },
      { slug: 'uborka-posle-remonta', nameRu: 'Уборка после ремонта', nameUz: 'Ta’mirdan keyingi tozalash' },
      { slug: 'himchistka', nameRu: 'Химчистка мебели и ковров', nameUz: 'Mebel va gilam kimyoviy tozalash' },
      { slug: 'mytie-okon', nameRu: 'Мытьё окон', nameUz: 'Deraza yuvish' },
    ],
  },
  {
    slug: 'avto',
    nameRu: 'Автоуслуги',
    nameUz: 'Avto xizmatlar',
    icon: 'car',
    children: [
      { slug: 'avtoelektrik', nameRu: 'Автоэлектрик', nameUz: 'Avto elektr' },
      { slug: 'shinomontazh', nameRu: 'Шиномонтаж', nameUz: 'Shinamontaj' },
      { slug: 'avtomoyka', nameRu: 'Автомойка', nameUz: 'Avtomobil yuvish' },
      { slug: 'kuzovnoy-remont', nameRu: 'Кузовной ремонт', nameUz: 'Kuzov ta’mirlash' },
      { slug: 'evakuator', nameRu: 'Эвакуатор', nameUz: 'Evakuator' },
    ],
  },
  {
    slug: 'it-kompyutery',
    nameRu: 'IT и компьютеры',
    nameUz: 'IT va kompyuterlar',
    icon: 'laptop',
    children: [
      { slug: 'remont-kompyuterov', nameRu: 'Ремонт компьютеров и ноутбуков', nameUz: 'Kompyuter va noutbuklar ta’miri' },
      { slug: 'remont-telefonov', nameRu: 'Ремонт телефонов', nameUz: 'Telefon ta’mirlash' },
      { slug: 'sozdanie-saytov', nameRu: 'Создание сайтов', nameUz: 'Sayt yaratish' },
      { slug: 'seo-reklama', nameRu: 'SEO и реклама', nameUz: 'SEO va reklama' },
      { slug: 'nastroika-setey', nameRu: 'Настройка сетей', nameUz: 'Tarmoqlarni sozlash' },
    ],
  },
  {
    slug: 'prazdniki-svadby',
    nameRu: 'Праздники и свадьбы',
    nameUz: 'Bayramlar va to‘ylar',
    icon: 'party-popper',
    children: [
      { slug: 'tamada', nameRu: 'Тамада и ведущий', nameUz: 'To‘ybegi va boshlovchi' },
      { slug: 'muzykanty', nameRu: 'Музыканты и DJ', nameUz: 'Sozandalar va DJ' },
      { slug: 'animatory', nameRu: 'Аниматоры', nameUz: 'Animatorlar' },
      { slug: 'floristika', nameRu: 'Флористика и декор', nameUz: 'Gullar va bezak' },
      { slug: 'kendi-bar', nameRu: 'Кенди-бар и кейтеринг', nameUz: 'Candy-bar va ketering' },
    ],
  },
  {
    slug: 'perevozki',
    nameRu: 'Перевозки и грузчики',
    nameUz: 'Tashish va yuk ko‘taruvchilar',
    icon: 'truck',
    children: [
      { slug: 'kvartirnyy-pereezd', nameRu: 'Квартирный переезд', nameUz: 'Xonadon ko‘chirish' },
      { slug: 'gruzoperevozki', nameRu: 'Грузоперевозки', nameUz: 'Yuk tashish' },
      { slug: 'gruzchiki', nameRu: 'Грузчики', nameUz: 'Yuk ko‘taruvchilar' },
    ],
  },
  {
    slug: 'yuridicheskie',
    nameRu: 'Юридические услуги',
    nameUz: 'Yuridik xizmatlar',
    icon: 'scale',
    children: [
      { slug: 'konsultacii', nameRu: 'Семейные консультации', nameUz: 'Oilaviy maslahatlar' },
      { slug: 'registraciya-biznesa', nameRu: 'Регистрация бизнеса', nameUz: 'Biznes ro‘yxatdan o‘tkazish' },
      { slug: 'sudebnoe-predstavitelstvo', nameRu: 'Судебное представительство', nameUz: 'Sud ishlari' },
      { slug: 'migracionnye', nameRu: 'Миграционные вопросы', nameUz: 'Migratsiya masalalari' },
    ],
  },
  {
    slug: 'buhgalteriya',
    nameRu: 'Бухгалтерия и финансы',
    nameUz: 'Buxgalteriya va moliya',
    icon: 'calculator',
    children: [
      { slug: 'vedenie-buh', nameRu: 'Ведение бухгалтерии', nameUz: 'Buxgalteriya yuritish' },
      { slug: 'nalogovye-konsultacii', nameRu: 'Налоговые консультации', nameUz: 'Soliq maslahatlari' },
      { slug: 'audit', nameRu: 'Аудит', nameUz: 'Audit' },
    ],
  },
  {
    slug: 'foto-video',
    nameRu: 'Фото и видео',
    nameUz: 'Foto va video',
    icon: 'camera',
    children: [
      { slug: 'fotograf-svadba', nameRu: 'Фотограф на свадьбу', nameUz: 'To‘y uchun fotograf' },
      { slug: 'videosemka', nameRu: 'Видеосъёмка', nameUz: 'Video suratga olish' },
      { slug: 'fotostudiya', nameRu: 'Фотостудия', nameUz: 'Fotostudiya' },
      { slug: 'montazh-video', nameRu: 'Монтаж видео', nameUz: 'Video montaj' },
    ],
  },
  {
    slug: 'nyani-sidelki',
    nameRu: 'Няни и сиделки',
    nameUz: 'Enagalar va sidelkalar',
    icon: 'baby',
    children: [
      { slug: 'nyanya', nameRu: 'Няня', nameUz: 'Enaga' },
      { slug: 'sidelka', nameRu: 'Сиделка', nameUz: 'Sidelka' },
      { slug: 'pomoshch-po-domu', nameRu: 'Помощница по дому', nameUz: 'Uy yordamchisi' },
    ],
  },
];

async function seed() {
  // eslint-disable-next-line no-console
  console.log('Сидим категории...');

  let sortOrder = 0;
  for (const root of TREE) {
    const parent = await prisma.category.upsert({
      where: { slug: root.slug },
      update: { nameRu: root.nameRu, nameUz: root.nameUz, icon: root.icon ?? null, sortOrder },
      create: {
        slug: root.slug,
        nameRu: root.nameRu,
        nameUz: root.nameUz,
        icon: root.icon ?? null,
        sortOrder,
      },
    });
    sortOrder += 10;

    let childOrder = 0;
    for (const child of root.children ?? []) {
      await prisma.category.upsert({
        where: { slug: child.slug },
        update: {
          nameRu: child.nameRu,
          nameUz: child.nameUz,
          parentId: parent.id,
          sortOrder: childOrder,
        },
        create: {
          slug: child.slug,
          nameRu: child.nameRu,
          nameUz: child.nameUz,
          parentId: parent.id,
          sortOrder: childOrder,
        },
      });
      childOrder += 10;
    }
  }

  // eslint-disable-next-line no-console
  console.log('Готово.');
}

seed()
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
