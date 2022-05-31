export const processors = {
  title: {
		name: "title",
		value: [
			"Процессоры",
		]
	},
  cost: {
    name: "Цена",
    value: [
      "150000",
      "175000",
      "450000",
      "302000",
      "470000",
      "650000"
    ]
  },
  brandArr: {
    name: "Брэнд",
    value: [
      "AMD",
      "INTEL"
    ]
  },
  modelArr: {
    name: "Модель",
    value: [
      "E5-4669",
      "E5-4667",
      "E5-2699",
      "E5-2640",
      "E5-2618L",
      "E5-1650",
      "4590",
      "Athlon",
      "Sempron"
    ]
  },
  socketArr: {
    name: "Сокет",
    value: [
      "LGA 1700",
      "LGA 1200",
      "Socket R3",
      "Socket H",
      "PAC611",
      "Socket AM5",
      "Socket TRX4",
      "Socket AM4",
      "Socket FM2+"
    ]
  },
  coreNumArr: {
    name: "Общее количество ядер",
    value: [
      "0",
      "2",
      "4",
      "6",
      "8",
      "10",
      "16",
      "24"
    ]
  },
  maxFreqArr: {
    name: "Максимальная тактовая частота, ГГц",
    value: [
      "2.6",
      "2.8",
      "3.0",
      "3.4",
      "3.8",
      "4.5"
    ]
  },
  freqArr: {
    name: "Тактовая частота, ГГц",
    value: [
      "2.6",
      "2.8",
      "3.0",
      "3.4",
      "3.8",
      "4.5"
    ]
  },
  archArr: {
    name: "Микроархитектура",
    value: [
      "Xeon",
      "Yorkfield",
      "Wolfdale",
      "Whitefield",
      "Val Vista",
      "Tulsa",
      "Timna",
      "Tanglewood",
      "Sodaville"
    ]
  },
  L1Arr: {
    name: "Объем кэша L1",
    value: [
      "2 x 32 Кб"
    ]
  },
  L2Arr: {
    name: "Объем кэша L2",
    value: [
      "4 х 256 Кб"
    ]
  },
  L3Arr: {
    name: "Объем кэша L3",
    value: [
      "4 Мб",
      "8 Мб",
      "10 Мб",
      "16 Мб"
    ]
  },
  typeRamArr: {
    name: "Тип поддерживаемой памяти",
    value: [
      "DDR4-2666",
      "DDR3-2666",
      "DDR2-1666"
    ]
  },
  graph: {
    name: "Интегрированная графическая система",
    value: [
      "Intel UHD Graphics 610",
      "NVIDIA",
      "AMD"
    ]
  },
  techProcess: {
    name: "Техпроцесс",
    value: [
      "35нм",
      "10нм",
      "7нм"
    ]
  },
  tdp: {
    name: "Расчетная мощность (TDP)",
    value: [
      "70w",
      "90w",
      "150w"
    ]
  },
  supportTech: {
    name: "Поддерживаемые технологии",
    value: [
      "Intel 64 / Extended Memory 64 Technology (EM64T), Intel Boot Guard, Intel Trusted Execution Technology (TXT), Intel VT-x with Extended Page Tables (EPT), Intel Virtualization Technology (VT-x), Intel Virtualization Technology for Directed I/O (VT-d), Intel Thermal Monitoring Technologies (TM), Intel Identity Protection Technology, Intel Software Guard Extensions (SGX), Intel Optane Memory Supported, Execute Disable Bit Feature (NX Bit), Enhanced Intel SpeedStep Technology (EIST), AES New Instructions"
    ]
  },
  instruct: {
    name: "Поддерживаемые инструкции",
    value: [
      "MMX, SSE, SSE2, SSE3, SSSE3, SSE4, SSE4.1, SSE4.2, AES"
    ]
  },
  criticalTemp: {
    name: "Критическая температура",
    value: [
      "100°C",
      "110°C",
      "120°C"
    ]
  },
  misc: {
    name: "Дополнительно ",
    value: [
      "Количество каналов памяти - 2  Версия PCI Express: PCIe 3.0"
    ]
  },
  bundle: {
    name: "Упаковка ",
    value: [
      "OEM (без системы охлаждения!)"
    ]
  },
  warranty: {
    name: "Срок гарантии (мес.) ",
    value: [
      "12"
    ]
  },
  site: {
    name: "Ссылка на сайт производителя",
    value: [
      "www.intel.ru"
    ]
  }
}

export const chargersData = {
  title: {
		name: "title",
		value: [
			"Зарядное устройство",
		]
	},
  cost: {
    name: 'Цена',
    value: [
      '20000', 
      '23000', 
      '12000'
    ]
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Meizu', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['V3330L0A0-EU', 'FlashCharge Charger, White', ' Awei C3', 'для USB-устройств, Black', 'ReVolt A7', 'A3510Q', 'DL-C29', 'DL-C29']
  },
  type: {
    name: 'Тип',
    value: ['Зарядное устройство']
  },
  outputParams: { 
    name: "Выходные параметры",
    value: [`5 В / 2 А, 10 Вт 9 В / 2 А, 18 Вт 11 В / 3 А, 33 Вт`]
  },
  outputPower: {
    name: 'Ток',
    value: ['3 A'],
  },
  deviceCount: {
    name: "Количество",
    value: ['1']
  },
  connector: {
    name: 'Коннектор',
    value: ['USB'],
  },
  power: {
    name: 'Питание',
    value: ['От сети']
  },
  material: {
    name: 'Материал',
    value: ['Ударопрочный пластик']
  },
  features: {
    name: 'Особенности',
    value: ['Поддержка быстрого заряда']
  },
  color: {
    name: 'Цвет',
    value: ['Черный', 'Белый']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Входное напряжение: 100-240 В, 50/60 Гц, 0.85 A`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const phoneCases = {
  cost: {
    name: 'Цена',
    value: ['20000', '23000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['BQ ', 'Huawei ', 'Meizu ', 'Motorola ', 'Poco ', 'Samsung ', 'Xiaomi']
  },
  modelArr: {
    name: 'Модель',
    value: ['V3330L0A0-EU', ' A-Case, Clear', ' XG-PR23, Dark-Blue', 'X-Game, XG-PR35, Dark-Blue', 'XG-PR36, Burgundy', 'XG-BP098, Black', ' BoraSCO']
  },
  compatibility: {
    name: "Совместимость",
    value: ['vivo']
  },
  attention: {
    name: 'Внимание',
    value: ['Рекомендуется свериться с размерами вашего мобильного устройств']
  },
  material: {
    name: 'Материал',
    value: ['Закаленное стекло']
  },
  caseType: {
    name: 'Чехол',
    value: ['Задняя крышка']
  },
  protect: {
    name: 'Защита',
    value: ['пыли и царапин, отпечатков пальцев, повреждений и потертостей']
  },
  color: {
    name: 'Цвет',
    value: ['Cветло-серый']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Матовый и полупрозрачный Тонкий с минималистичным дизайном`]
  },
  sizes: {
    name: 'Размер',
    value: ['7.7 х 16.5 х 0.8 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const books = {
  cost: {
    name: 'Цена',
    value: ['20000', '23000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Gmini', 'PocketBook']
  },
  modelArr: {
    name: 'Брэнд',
    value: [' Touch Lux 4', '616', 'Watch 4', 'GTS 2', 'Nike Series 7', 'Element Pink', 'Bip U', 'Star']
  },
  displaySize: {
    name: 'Размер экрана',
    value: ['10.5', '10.7', '11', '12', '14']
  },
  displayResolution: {
    name: 'Разрешение',
    value: ['1920 x 1200']
  },
  ram: {
    name: 'ОЗУ',
    value: ['4 Гб', '8 Гб']
  },
  memory: {
    name: 'Память',
    value: ['32 Гб', '64 Гб']
  },
  attention: {
    name: 'Внимание',
    value: [`Доступный пользователю объем встроенной памяти меньше, так как часть занимает программное обеспечение устройства`]
  },
  sdSupport: {
    name: 'Поддержка карт',
    value: [`MicroSD, MicroSDHC, MicroSDXC, до 1 Тб`]
  },
  cpu: {
    name: 'ЦПУ',
    value: [`Unisoc`]
  },
  cpuFreq: {
    name: 'Частота процессора',
    value: [`2.0`]
  },
  cores: {
    name: 'Количество ядер',
    value: [`8 ядер`]
  },
  wirelessInterf: {
    name: 'Интерфейсы',
    value: ['Wi-Fi (802.11a), Wi-Fi (802.11b), Wi-Fi (802.11g), Wi-Fi (802.11n), Wi-Fi (802.11ac), Bluetooth']
  },
  OS: {
    name: 'ОС',
    value: ['Android']
  },
  startVerOS: {
    name: 'Версия ОС',
    value: ['11 R']
  },
  accCapasity: {
    name: 'Емкость',
    value: ['7040']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  detectors: {
    name: 'Детекторы',
    value: ['Гироскоп, Акселерометр, Цифровой компас, Датчик освещённости, Датчик Холла, Система распознавания лица']
  },
  connectors: {
    name: 'Коннекторы',
    value: ['USB Type-C, выход для наушников']
  },
  color: {
    name: 'Цвет',
    value: ['Серебристый, Черный', 'Черный']
  },
  accessu: {
    name: 'Аксессуары',
    value: ['Кабель USB Type-C']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Оснащен экраном E Ink Carta
                          Эргономичные кнопки
                          Изысканный дизайн
                          Время работы от заряда батареи до 1-го месяца. (Реальное время работы батареи от одного заряда может варьироваться в зависимости от режима использования и выбранных настроек).`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const monopods = {
  cost: {
    name: 'Цена',
    value: ['20000', '23000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Meizu', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['Mini Wired', 'Wireless Power Bank', 'Awei P8K', 'GTS 2', 'Nike Series 7', 'Element Pink', 'Bip U', 'Star']
  },
  connector: {
    name: 'Коннектор',
    value: ['USB Type-C']
  },
  capacity: {
    name: 'Емкость',
    value: ['10000']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  inputType: {
    name: 'Тип входа',
    value: ['USB-A: 5V/3A, 9V/2.23A, 12V/1.67A, 10V/2.25A USB-C: 5V/3A, 9V/2.23A, 12V/1.67A, 10V/2.25A']
  },
  output: {
    name: 'Выход',
    value: ['10 Вт']
  },
  outputCurrent: {
    name: 'Ток',
    value: ['3']
  },
  quantity: {
    name: 'Количество',
    value: ['3']
  },
  connectors: {
    name: 'Коннекторы',
    value: ['USB, USB Type-C для зарядки']
  },
  protect: {
    name: 'Защита',
    value: ['перезарядки, короткого замыкания, перегрузок, перегрева']
  },
  power: {
    name: 'Питание',
    value: ['от USB порта']
  },
  color: {
    name: 'Цвет',
    value: ['Черный']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Подключается к смартфону с помощью 3.5 мм аудио кабеля Надежный выдвижной механизм`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const powerbanks = {
  cost: {
    name: 'Цена',
    value: ['20000', '23000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Tecno Mobile', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['WPB15PDZM', 'Wireless Power Bank', 'Awei P8K', 'GTS 2', 'Nike Series 7', 'Element Pink', 'Bip U', 'Star']
  },
  connector: {
    name: 'Коннектор',
    value: ['USB Type-C']
  },
  capacity: {
    name: 'Емкость',
    value: ['10000']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  inputType: {
    name: 'Тип входа',
    value: ['USB-A: 5V/3A, 9V/2.23A, 12V/1.67A, 10V/2.25A USB-C: 5V/3A, 9V/2.23A, 12V/1.67A, 10V/2.25A']
  },
  output: {
    name: 'Выход',
    value: ['10 Вт']
  },
  quantity: {
    name: 'Количество',
    value: ['3']
  },
  connectors: {
    name: 'Коннекторы',
    value: ['USB, USB Type-C для зарядки']
  },
  protect: {
    name: 'Защита',
    value: ['перезарядки, короткого замыкания, перегрузок, перегрева']
  },
  power: {
    name: 'Питание',
    value: ['от USB порта']
  },
  material: {
    name: 'Материал',
    value: ['Панель беспроводной зарядки покрыта специальным материалом софт тач, позволяющим уменьшить скольжение']
  },
  feature: {
    name: 'Особенности',
    value: ['Беспроводная зарядка Qi, Индикатор заряда, Поддержка быстрого заряда']
  },
  color: {
    name: 'Цвет',
    value: ['Черный']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Зарядка до 3 устройств: 1 устройство по беспроводному протоколу + 2 по USB-кабелю
                            Поддержка одновременной зарядки и разрядки
                            Беспроводная быстрая зарядка мощностью до 10 Вт
                            Проводная быстрая зарядка мощностью до 22.5 Вт
                            Расстояние беспроводной зарядки ≤ 5 мм
                            Рабочая температура от 5 до 35°C`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const glass = {
  cost: {
    name: 'Цена',
    value: ['20000', '23000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Pump']
  },
  modelArr: {
    name: 'Модель',
    value: ['Tempered glass', 'J1 mini', 'Meizu M2 mini', 'Red Line', 'Red Line Full Glue', 'Red Line Full Glue', 'A-Case', 'BoraSCO Full Cover+ Full Glue', 'Redmi Note 9, BoraSCO']
  },
  compatibility: {
    name: 'Совместимость', 
    value: ['Samsung', 'Galaxy J1 mini']
  },
  attention: {
    name: 'Совместимость',
    value: ['Рекомендуется свериться с размерами вашего мобильного устройств']
  },
  material: {
    name: 'Материал',
    value: ['Закаленное стекло']
  },
  glassType: {
    name: 'Тип стекла',
    value: ['2.5D']
  },
  startVerOS: {
    name: 'Версия ОС',
    value: ['9H']
  },
  widhtness: {
    name: 'Толщина',
    value: ['0.3']
  },
  protect: {
    name: 'Защита',
    value: ['пыли и царапин, отпечатков пальцев, повреждений и потертостей']
  },
  feature: {
    name: 'Особенности',
    value: ['Скругленные края']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Не искажает цвета  Не влияет на чувствительность`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const smartphones = {
  cost: {
    name: 'Цена',
    value: ['150000', '175000', '450000', '302000', '470000', '650000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Tecno Mobile', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['Spark 8P', 'POP 5 LTE', 'Spark Go', '12 Pro', 'Note 11 Pro 5G', 'Galaxy A03', 'Camon 18', ' HOT 10i', 'iPhone 13 Pro']
  },
  displaySize: {
    name: 'Размер экрана',
    value: ['6.1', '5.7', '4.7', '6', '7']
  },
  displayResolution: {
    name: 'Разрешение',
    value: ['2532 x 1170', '1600 x 1200']
  },
  typeofMatrix: {
    name: 'Тип матрицы',
    value: ['Super Retina XDR, OLED', 'tn', 'ips  ', 'pls', 'va', 'mva']
  },
  displayMaxBrigth: {
    name: 'Яркость',
    value: ['1200 кд/м2']
  },
  displayFreq: {
    name: 'Частота',
    value: ['120']
  },
  displayGlass: {
    name: 'Стекло',
    value: ['Ceramic Shield, олеофобное покрытие']
  },
  memory: {
    name: 'Память',
    value: ['128ГБ', '256ГБ', '512 ГБ', '1024ГБ']
  },
  supportSD: {
    name: 'Поддержка карт',
    value: ['Не поддерживает', 'Поддерживает']
  },
  cpu: {
    name: 'ЦПУ',
    value: ['Apple', 'Samsung', 'MediaTek']
  },
  cpuModel: {
    name: 'Модель',
    value: ['Snapdragon 450', 'Exynos 7870', 'Helio P25', 'Helio G90T', 'Kirin 990']
  },
  coreNumbers: {
    name: 'Количество ядер',
    value: ['6 ядер (2 + 4)', '4 ядра (2 + 2)', '2 ядра']
  },
  supportCam: {
    name: 'Поддержка камеры',
    value: ['на задней панели, фронтальная']
  },
  baseCam: {
    name: 'Основная камера',
    value: ['12 + 12 + 12', '12 + 12', '6 + 8 + 4']
  },
  frontCam: {
    name: 'Фронтальная камера',
    value: ['12', '5', '10']
  },
  videoRes: {
    name: 'Разрешение',
    value: ['3840 х 2160 пикселей, 60 кадров в секунду', '2560 х 1780 пикселей, 30 кадров в секунду', '7нм']
  },
  simQuan: {
    name: 'Количество сим карт',
    value: ['1', '2']
  },
  mobileInternet: {
    name: 'Мобильный интернет',
    value: ['3G, 4G, 5G', '3G, 4G']
  },
  freqSup: {
    name: 'Частоты',
    value: ['2G GSM/EDGE: 850, 900, 1800, 1900 МГц 3G UMTS/HSPA+/DC‑HSDPA: 850, 900, 1700/2100, 1900, 2100 МГц']
  },
  freqSup4G: {
    name: 'Частоты 4g',
    value: ['700, 800, 850, 900, 1500, 1700, 1800, 1900, 2100, 2300, 2500, 2600, 3500']
  },
  freqSup5G: {
    name: 'Частоты 5g',
    value: ['700, 800, 850, 900, 1800, 2100, 2300, 2500, 2600, 3500, 3700']
  },
  wirelessInterf: {
    name: 'Интерфейс',
    value: ['Wi-Fi, Bluetooth, NFC', 'Wi-Fi, Bluetooth']
  },
  wifiStandard: {
    name: 'Вай-фай стандарт',
    value: ['802.11ax']
  },
  bluethoothType: {
    name: 'Bluetooth тип',
    value: ['5.0'],
  },
  navigation: {
    name: 'Навигация',
    value: ['GPS, ГЛОНАСС)']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  accCapas: {
    name: 'Емкость',
    value: ['5000 мАч', '3000 мАч', '3500 мАч']
  },
  connector: {
    name: 'Коннекторы',
    value: ['Apple Lightning', 'USB Type-C, miniJack 3.5']
  },
  detect: {
    name: 'Датчики',
    value: ['Акселерометр', 'Гироскоп', 'Сканер отпечатков пальцев', 'Цифровой компас']
  },
  OS: {
    name: 'ОС',
    value: ['Android', 'IOS', 'MUI']
  },
  startVerOS: {
    name: 'Версия ОС',
    value: ['11 R', '10']
  },
  color: {
    name: 'Цвет',
    value: ['Серебристый, Черный', 'Черный']
  },
  access: {
    name: 'Аксессуары',
    value: ['Гарнитура, Чехол']
  },
  misc: {
    name: 'Дополнительно',
    value: ['Графический ускоритель Mali-G76 MC4  Оболочка XOS 10.0  Быстрая зарядка 18Вт']
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const pushButtonPhones = {
  cost: {
    name: 'Цена',
    value: ['20000', '23000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Nokia', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['Spark 8P', 'POP 5 LTE', 'Spark Go', '12 Pro', 'Note 11 Pro 5G', 'Galaxy A03', 'Camon 18', ' HOT 10i', 'iPhone 13 Pro']
  },
  displaySize: {
    name: 'Размер экрана',
    value: ['6.1', '5.7', '4.7', '6', '7']
  },
  displayResolution: {
    name: 'Разрешенин',
    value: ['2532 x 1170', '1600 x 1200']
  },
  typeofMatrix: {
    name: 'Тип матрицы',
    value: ['Super Retina XDR, OLED', 'tn', 'ips  ', 'pls', 'va', 'mva']
  },
  displayMaxBrigth: {
    name: 'Яркость',
    value: ['1200 кд/м2']
  },
  displayFreq: {
    name: 'Частота',
    value: ['120']
  },
  displayGlass: {
    name: 'Стекло',
    value: ['Ceramic Shield, олеофобное покрытие']
  },
  memory: {
    name: 'Память',
    value: ['128ГБ', '256ГБ', '512 ГБ', '1024ГБ']
  },
  supportSD: {
    name: 'Поддержка карт',
    value: ['Не поддерживает', 'Поддерживает']
  },
  cpu: {
    name: 'ЦПУ',
    value: ['Apple', 'Samsung', 'MediaTek']
  },
  cpuModel: {
    name: 'Модель ЦПУ',
    value: ['Snapdragon 450', 'Exynos 7870', 'Helio P25', 'Helio G90T', 'Kirin 990']
  },
  coreNumbers: {
    value: ['6 ядер (2 + 4)', '4 ядра (2 + 2)', '2 ядра']
  },
  supportCam: {
    name: 'Поддержка камеры',
    value: ['на задней панели, фронтальная']
  },
  baseCam: {
    name: 'Основная камера',
    value: ['12 + 12 + 12', '12 + 12', '6 + 8 + 4']
  },
  frontCam: {
    name: 'Фронтальная камера',
    value: ['12', '5', '10']
  },
  videoRes: {
    name: 'Разрешение',
    value: ['3840 х 2160 пикселей, 60 кадров в секунду', '2560 х 1780 пикселей, 30 кадров в секунду', '7нм']
  },
  simQuan: {
    name: 'Количество сим карт',
    value: ['1', '2']
  },
  mobileInternet: {
    name: 'Мобильный интернет',
    value: ['3G, 4G, 5G', '3G, 4G']
  },
  freqSup: {
    name: 'Частоты',
    value: ['2G GSM/EDGE: 850, 900, 1800, 1900 МГц 3G UMTS/HSPA+/DC‑HSDPA: 850, 900, 1700/2100, 1900, 2100 МГц']
  },
  freqSup4G: {
    name: 'Частоты 4g',
    value: ['700, 800, 850, 900, 1500, 1700, 1800, 1900, 2100, 2300, 2500, 2600, 3500']
  },
  freqSup5G: {
    name: 'Частоты 5g',
    value: ['700, 800, 850, 900, 1800, 2100, 2300, 2500, 2600, 3500, 3700']
  },
  wirelessInterf: {
    name: 'Интерфейс',
    value: ['Wi-Fi, Bluetooth, NFC', 'Wi-Fi, Bluetooth']
  },
  wifiStandard: {
    name: 'Вай-фай стандарт',
    value: ['802.11ax']
  },
  bluethoothType: {
    name: 'Bluetooth тип',
    value: ['5.0'],
  },
  navigation: {
    name: 'Навигация',
    value: ['GPS, ГЛОНАСС)']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  accCapas: {
    name: 'Емкость',
    value: ['5000 мАч', '3000 мАч', '3500 мАч']
  },
  connector: {
    name: 'Коннекторы',
    value: ['Apple Lightning', 'USB Type-C, miniJack 3.5']
  },
  detect: {
    name: 'Датчики',
    value: ['Акселерометр', 'Гироскоп', 'Сканер отпечатков пальцев', 'Цифровой компас']
  },
  OS: {
    name: 'ОС',
    value: ['Android', 'IOS', 'MUI']
  },
  startVerOS: {
    name: 'Версия ОС',
    value: ['11 R', '10']
  },
  color: {
    name: 'Цвет',
    value: ['Серебристый, Черный', 'Черный']
  },
  access: {
    name: 'Аксессуары',
    value: ['Гарнитура, Чехол']
  },
  misc: {
    name: 'Дополнительно',
    value: ['Графический ускоритель Mali-G76 MC4  Оболочка XOS 10.0  Быстрая зарядка 18Вт']
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const smartwatches = {
  cost: {
    name: 'Цена',
    value: ['20000', '23000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Tecno Mobile', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['Series 7', 'Watch SE', 'Watch 4', 'GTS 2', 'Nike Series 7', 'Element Pink', 'Bip U', 'Star']
  },
  displaySize: {
    name: 'Размер экрана',
    value: ['1.43', '1.47', '1.44', '1.42', '1.41']
  },
  displayResolution: {
    name: 'Разрешение экрана',
    value: ['466 х 466']
  },
  typeofMatrix: {
    name: 'Тип матрицы',
    value: ['AMOLED']
  },
  wirelessInterf: {
    name: 'Интерфейс',
    value: ['Wi-Fi, Bluetooth, NFC']
  },
  bluethoothVer: {
    name: 'Версия Bluethooth',
    value: ['5.2']
  },
  navigation: {
    name: 'Навигация',
    value: ['GPS, ГЛОНАСС)']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  accCapas: {
    name: 'Емкость',
    value: ['5000 мАч', '3000 мАч', '3500 мАч']
  },
  autoTime: {
    name: 'Время',
    value: ['До 12 дней']
  },
  detect: {
    name: 'Датчики',
    value: ['Акселерометр', 'Гироскоп', 'Сканер отпечатков пальцев', 'Цифровой компас']
  },
  casse: {
    name: 'Чехол',
    value: ['Ударопрочный пластик']
  },
  color: {
    name: 'Цвет',
    value: ['Серебристый, Черный', 'Черный']
  },
  protect: {
    name: 'Защита',
    value: ['Влагозащита']
  },
  compatibility: {
    name: 'Совместимость',
    value: ['Android 6.0 и iOS 10.0 и выше']
  },
  misc: {
    name: 'Дополнение',
    value: [`Телефонные звонки по Bluetooth
                            Экран с частотой обновления 60 Гц
                            Материал ремешка - силикон, 22 мм
                            Регулируемая длина ремешка 160-220мм
                            Дополнительные датчики навигации BDS, QZSS
                            Рамка - полиамид, армированный стекловолокном
                            Более 200 разноцветных тематических циферблатов
                            117 фитнес-режимов, 19 профессиональных режимов
                            Водонепроницаемость 5 АТМ на глубину до 50 метров
                            Двухдиапазонный GPS поддерживает несколько спутниковых навигационных систем для более быстрого и точного позиционирования`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  },
}

export const phablets = {
  cost: {
    name: 'Цена',
    value: ['200000', '130000', '12000', '160000', '120000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Tecno Mobile', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['Series 7', 'Watch SE', 'Watch 4', 'GTS 2', 'Nike Series 7', 'Element Pink', 'Bip U', 'Star']
  },
  displaySize: {
    name: 'Размер экрана',
    value: ['10.5', '10.7', '11', '12', '14']
  },
  displayResolution: {
    name: 'Разрешение экрана',
    value: ['1920 x 1200']
  },
  ram: {
    name: 'ОЗУ',
    value: ['4 Гб', '8 Гб']
  },
  memory: {
    name: 'Память',
    value: ['32 Гб', '64 Гб']
  },
  attention: {
    name: 'Внимание',
    value: [`Доступный пользователю объем встроенной памяти меньше, так как часть занимает программное обеспечение устройства`]
  },
  sdSupport: {
    name: 'Поддержка карт',
    value: [`MicroSD, MicroSDHC, MicroSDXC, до 1 Тб`]
  },
  cpu: {
    name: 'ЦПУ',
    value: [`Unisoc`]
  },
  cpuFreq: {
    name: 'Частота',
    value: [`2.0`]
  },
  cores: {
    name: 'Количество ядер',
    value: [`8 ядер`]
  },
  wirelessInterf: {
    name: 'Интерфейс',
    value: ['Wi-Fi (802.11a), Wi-Fi (802.11b), Wi-Fi (802.11g), Wi-Fi (802.11n), Wi-Fi (802.11ac), Bluetooth']
  },
  navigation: {
    name: 'Навигация',
    value: ['GPS, ГЛОНАСС)']
  },
  internet: {
    name: 'Интернет',
    value: ['4G, 3G']
  },
  standarts: {
    name: "Стандарт",
    value: ['GSM, UMTS, LTE']
  },
  freqSupport: {
    name: 'Частоты',
    value: [`2G GSM: 850, 900, 1800, 1900 МГц
                                  3G UMTS: 850, 900, 1900, 2100 МГц
                                  4G LTE: 700, 800, 850, 900, 1800, 1900, 2100, 2300, 2500, 2600 МГц`]
  },
  callsSupport: {
    name: "Поддержка",
    value: ['Есть', 'Нет']
  },
  OS: {
    name: 'ОС',
    value: ['Android']
  },
  startVerOS: {
    name: 'ОС',
    value: ['11 R']
  },
  backCam: {
    name: 'Камера',
    value: ['на задней панели, фронтальная']
  },
  camResolution: {
    name: 'Разрешение',
    value: ['8 Мп']
  },
  frontCamResolution: {
    name: 'Разрешение фронтальной камеры',
    value: ['5 Мп']
  },
  videoResolution: {
    name: 'Видео разрешение',
    value: ['1920 x 1080 пикселей, 30 кадров в секунду']
  },
  accCapasity: {
    name: 'Емкость',
    value: ['7040']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  simQuantity: {
    name: 'Количество сим карт',
    value: ['1 SIM-карта']
  },
  simType: {
    name: 'Тип сим карты',
    value: ['NanoSIM']
  },
  detectors: {
    name: 'Датчики',
    value: ['Гироскоп, Акселерометр, Цифровой компас, Датчик освещённости, Датчик Холла, Система распознавания лица']
  },
  connectors: {
    name: "Коннекторы",
    value: ['USB Type-C, выход для наушников']
  },
  color: {
    name: "Цвет",
    value: ['Серебристый, Черный', 'Черный']
  },
  accessu: {
    name: 'Акссесуары',
    value: ['Кабель USB Type-C']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Поддержка технологии Dolby Atmos
                            Версия Bluetooth 5.0
                            Профиль Bluetooth: A2DP, AVRCP, DI, HFP, HID, HOGP, HSP, MAP, OPP, PAN, PBAP
                            Поддержка Wi-Fi Direct`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const smartbraceletes = {
  cost: {
    name: 'Цена',
    value: ['20000', '13000', '120000', '160000', '12000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Tecno Mobile', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Realme']
  },
  modelArr: {
    name: 'Модель',
    value: ['Series 7', 'Watch SE', 'Watch 4', 'GTS 2', 'Nike Series 7', 'Element Pink', 'Bip U', 'Star']
  },
  displaySize: {
    name: 'Размер экрана',
    value: ['1.43', '1.47', '1.44', '1.42', '1.41']
  },
  displayResolution: {
    name: 'Разрешение',
    value: ['466 х 466']
  },
  typeofMatrix: {
    name: 'Тип матрицы',
    value: ['AMOLED']
  },
  wirelessInterf: {
    name: 'Интерфейс',
    value: ['Wi-Fi, Bluetooth, NFC']
  },
  bluethoothVer: {
    name: 'Версия Bluetooth',
    value: ['5.2']
  },
  navigation: {
    name: 'Навигация',
    value: ['GPS, ГЛОНАСС)']
  },
  accType: {
    name: 'Тип аккумулятора',
    value: ['Литий-ионный (Li-Ion), Несъемный, Поддержка беспроводной зарядки']
  },
  accCapas: {
    name: 'Емкость аккумулятора',
    value: ['5000 мАч', '3000 мАч', '3500 мАч']
  },
  autoTime: {
    name: 'Время',
    value: ['До 12 дней']
  },
  detect: {
    name: 'Датчики',
    value: ['Акселерометр', 'Гироскоп', 'Сканер отпечатков пальцев', 'Цифровой компас']
  },
  casse: {
    name: 'Чехол',
    value: ['Ударопрочный пластик']
  },
  color: {
    name: 'Цвет',
    value: ['Серебристый, Черный', 'Черный']
  },
  protect: {
    name: 'Защита',
    value: ['Влагозащита']
  },
  compatibility: {
    name: 'Совместимость',
    value: ['Android 6.0 и iOS 10.0 и выше']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Телефонные звонки по Bluetooth
                            Экран с частотой обновления 60 Гц
                            Материал ремешка - силикон, 22 мм
                            Регулируемая длина ремешка 160-220мм
                            Дополнительные датчики навигации BDS, QZSS
                            Рамка - полиамид, армированный стекловолокном
                            Более 200 разноцветных тематических циферблатов
                            117 фитнес-режимов, 19 профессиональных режимов
                            Водонепроницаемость 5 АТМ на глубину до 50 метров
                            Двухдиапазонный GPS поддерживает несколько спутниковых навигационных систем для более быстрого и точного позиционирования`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const motherboards = {
  cost: {
    name: 'Цена',
    value: ['200000', '93000', '120000', '70000', '45000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['ASUS', 'ASRock', 'Biostar ', 'Esonic ', 'Gigabyte ', 'MSI']
  },
  modelArr: {
    name: 'Модель',
    value: ['ROG Strix B660-A Gaming WiFi D4', 'Prime B660M-K D4', ' ROG Strix B660-F', 'H610M-HDV/M.2', 'MAG B560M Bazooka', 'Element Pink', 'Bip U', 'Star']
  },
  socket: {
    name: 'Сокет',
    value: ['LGA1151', 'LGA1200', 'LGA1700', 'LGA2066', 'AM4', 'sTRX4']
  },
  arch: {
    name: "Архитектура",
    value: ['Braswell', 'Skylake', 'Kaby Lake', 'Coffee Lake', 'Comet Lake', 'Rocket Lake', 'Alder Lake', 'Zen', 'Zen+', 'Zen 2', 'Zen 3']
  },
  chipset: {
    name: 'Чипсет',
    value: ['Intel B150', 'AMD TRX40', 'AMD X570', 'AMD X470', 'AMD X370', 'AMD B450', 'AMD A320', 'Intel Z490', 'Intel H570', 'Intel H110', 'Intel B150']
  },
  wirelessInterf: {
    name: 'Интерфейс',
    value: ['Wi-Fi, Bluetooth, NFC']
  },
  support: {
    name: 'Поддержка',
    value: ['Turbo Boost, Extreme Memory Profile (XMP), Optane']
  },
  formFactor: {
    name: 'Форм-фактор',
    value: ['ATX', 'E-ATX', 'Micro ATX ', 'Mini-ITX', 'Mini-DTX']
  },
  ramNums: {
    name: 'Количество ОЗУ',
    value: ['4 x DDR5', '2 x DDR3', '1 x DDR4', '2 x DDR4', '4 x DDR4', '8 x DDR4', '2 x DDR5', '4 x DDR5']
  },
  supFreqs: {
    name: 'Частота',
    value: ['4800, 5000, 5200, 5400, 5600, 5800, 6000']
  },
  attention: {
    name: 'Внимание',
    value: ['Пожалуйста, уточняйте поддержку конкретных моделей процессоров и модулей памяти на официальном сайте производителя материнской платы!']
  },
  ramMax: {
    name: 'Максимальное ОЗУ',
    value: ['128 Гб']
  },
  sataNums: {
    name: 'Количество SATA',
    value: ['3', '4', '9']
  },
  ssdCon: {
    name: 'Коннектор SSD',
    value: ['2 x M.2']
  },
  interfaceM2: {
    name: 'Интерфейс M2',
    value: ['2х PCI Express 4.0 х4']
  },
  PCIExNums: {
    name: 'Количество PCIEx',
    value: ['2 слота x1, 2 слота x16']
  },
  PCIExMode: {
    name: 'Режим PCIEx',
    value: ['1 х слот PCI-E 5.0 x16, режим работы x16',  '1 х слот PCI-E 3.0 x16, режим работы x4']
  },
  audioCodec: {
    name: 'Аудио кодек',
    value: ['SupremeFX S1220A']
  },
  BIOS: {
    name: 'БИОС',
    value: ['256 Мб, UEFI BIOS, AMI BIOS']
  },
  channelNums: {
    name: 'Количество каналов',
    value: ['8']
  },
  ethernet: {
    name: "Сеть",
    value: ['Intel 2.5Gb, Wi-Fi 6']
  },
  videoCon: {
    name: 'Видео коннектор',
    value: ['1 x HDMI, 1 x DisplayPort']
  },
  attention2: {
    name: 'Внимание',
    value: ['При использовании процессоров без встроенного видео видеовыходы на плате не работают']
  },
  internal: {
    name: "Внутренности",
    value: ['1 x 4-pin CPU Fan, 1 x 4-pin AIO Pump, 2 x 4-pin Chassis Fan, 1 x USB 3.2 Gen 2 connector (support USB Type-C) , 1 x USB 3.2 Gen 1 header supports additional 2 x USB 3.2 Gen 1 ports, 2 x USB 2.0 headers support additional 4 x USB 2.0 ports, 3 x Addressable Gen 2, 1 x AURA RGB header, 1 x Clear CMOS header, 1 x COM Port, 1 x Front Panel Audio (AAFP),1 x S/PDIF Out header, 1 x SPI TPM header (14-1pin), 1 x 20-3 pin System Panel header with Chassis intrude function, 1 x Thermal Sensor header, 1 x Thunderbolt header']
  },
  powerCon: {
    name: 'Коннекторы питания',
    value: ['4-pin, 8-pin, 24-pin']
  },
  miscCons: {
    name: 'Дополнительные коннекторы',
    value: ['RJ-45 LAN, Rear-out, Sub/сenter-out, Line-in, Line-out, Mic-in, RP-SMA x 2']
  },
  usb30: {
    name: 'Коннекторы USB3.0',
    value: ['2']
  },
  usb31: {
    name: 'Коннекторы USB3.1',
    value: ['2']
  },
  usb32: {
    name: 'Коннекторы USB3.2',
    value: ['1']
  },
  backlight: {
    name: 'Подсветка',
    value: ['Встроенная подсветка, Разъем для подключения LED лент']
  },
  buttons: {
    name: 'Кнопки',
    value: ['Кнопка USB BIOS Flashback на задней панели']
  },
  communic: {
    name: "Соединения",
    value: ['2.5 Gigabit Ethernet (10/100/1000/2500 Мбит/с), Wi-Fi, Bluetooth']
  },
  misc: {
    name: 'Дополнительно',
    value: [`4 порта USB2.0 для подключения периферийных устройств
          Двухдиапазонный модуль Wi-Fi 6 (802.11ax) + Bluetooth 5.2
          Схема питания 12+1 фаз
          Встроенные радиаторы для слотов М.2, радиаторы зоны VRM
          Фиксирующий механизм - Q-защелка накопителей M.2
          Двустороннее шумоподавление AI + усилитель Savitech SV3H712
          Синхронизируемая подсветка Aura Sync
          Защита сетевого разъема LANGuard`]
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const ram = {
  cost: {
    name: 'Цена',
    value: ['50000', '53000', '20000', '60000', '45000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Kingston', 'ADATA', 'AMD ', 'Apacer ', 'ASUS ', 'GeIL', 'Crucial', 'Gigabyte', 'G.SKILL', 'Kingston', 'Patriot']
  },
  modelArr: {
    name: 'Модель',
    value: ['Fury Beast RGB', ' Panther Golden', ' NOX RGB', ' Fury Beast, 2x 16 GB Kit', 'Fury Beast', 'XPG Lancer', 'XPG Lancer RGB', 'Star']
  },
  socket: {
    name: 'Сокет',
    value: ['DDR5', 'DDR4']
  },
  arch: {
    name: 'Архитектура',
    value: ['Braswell', 'Skylake', 'Kaby Lake', 'Coffee Lake', 'Comet Lake', 'Rocket Lake', 'Alder Lake', 'Zen', 'Zen+', 'Zen 2', 'Zen 3']
  },
  capac: {
    name: 'Емкость',
    value: ['32 Гб (2 x 16 Гб)']
  },
  freq: {
    name: "Частота",
    value: ['6000 МГц']
  },
  throughput: {
    name: 'Пропускная скорость',
    value: ['48000 Мбайт/с']
  },
  voltage: {
    name: 'Напряжение',
    value: ['1.35 В']
  },
  timings: {
    name: 'Тайминги',
    value: ['CL40-40-40']
  },
  features: {
    name: 'Преимущества',
    value: ['Радиатор охлаждения, Поддержка профилей XMP, Подсветка']
  },
  attention: {
    name: 'Внимание',
    value: [`ПО управления RGB
              Поддержка профилей Intel XMP 3.0
              Встроенная микросхема управления питанием (PMIC)
              Исправление ошибок (ECC) в режиме реального времени`]
  },
  case: {
    name: 'Корпус',
    value: ['BOX']
  },
  hight: {
    name: 'Высота',
    value: ['3.5 см']
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const video = {
  cost: {
    name: 'Цены',
    value: ['500000', '530000', '200000', '600000', '450000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['AFOX ', 'AMD ', 'ASRock  ', 'ASUS  ', 'Colorful  ', 'EVGA ', 'Gainward ', 'GeIL ', 'Gigabyte', 'HIS ', 'Inno3D ']
  },
  modelArr: {
    name: 'Модель',
    value: ['Radeon RX 400 series', 'Radeon RX 500 series', 'Radeon 5500 Series  ', 'RTX 3060 Ti Ventus 2X OCV1 LHR', 'MSI GTX 1660 Super Gaming', 'Palit GTX 1660 StormX', 'MSI RTX 2060 Ventus GP', '2Gb ASUS GT 730SL', ' RTX 3080 Gaming OC 2.0']
  },
  series: {
    name: "Серия",
    value: ['RX 6500 XT Mech 2X', 'Radeon 5500 Series ', 'GeForce 200 Series', 'GeForce 16 Super Series', 'GeForce 20 Super Series', 'GeForce 30 Series']
  },
  vendor: {
    name: 'Вендор',
    value: ['NVIDIA', 'AMD']
  },
  chipset: {
    name: 'Чипсет',
    value: ['GeForce RTX 3050', 'GeForce RTX 2060', 'GeForce RTX 2070', 'GeForce RTX 2080', 'GeForce RTX 1080', 'GeForce RTX 1070', 'GeForce 460']
  },
  techProcess: {
    name: 'Техпроцесс',
    value: ['8нм']
  },
  OCMODE: {
    name: 'Режим Overclocker',
    value: ['1807 МГц']
  },
  memoryFreq: {
    name: 'Частота памяти',
    value: ['14000', '15000', '12000', '11000', '10000']
  },
  videoMemoryType: {
    name: 'Тип видео памяти',
    value: ['GDDR6']
  },
  capacVideoMemory: {
    name: 'Емкость видео памяти',
    value: ['8 ГБ', '12 ГБ', '24 ГБ', '20 ГБ']
  },
  bitDepth: {
    name: 'Ширина памяти',
    value: ['128 бит', '256 бит', '64 бит']
  },
  throughput: {
    name: 'Скорость',
    value: ['224']
  },
  uCpuNums: {
    name: "Количество процессоров",
    value: ['2560']
  },
  tech: {
    name: 'Технология',
    value: ['NVIDIA Ansel, NVIDIA CUDA, NVIDIA G-Sync, NVIDIA PhysX, NVIDIA DLSS, HDCP, HDMI, Ray Tracing']
  },
  voltage: {
    name: 'Напряжение',
    value: ['1.35 В']
  },
  timings: {
    name: 'Тайминги',
    value: ['CL40-40-40']
  },
  API: {
    name: 'API',
    value: ['DirectX 12 Ultimate, OpenGL 4.6']
  },
  MultiGPU: {
    name: 'Мульти ГПУ',
    value: ['Не поддерживает']
  },
  LHR: {
    name: 'LHR',
    value: ['ДА']
  },
  interface: {
    name: 'Интерфейс',
    value: ['PCI Express 4.0']
  },
  displayNums: {
    name: 'Количество дисплеев',
    value: ['4', '3']
  },
  connectors: {
    name: 'Коннекторы',
    value: ['HDMI, DisplayPort x 3']
  },
  maxResolution: {
    name: 'Макс разрешения',
    value: ['7680 x 4320 (при подключении через DisplayPort)']
  },
  cooling: {
    name: 'Охлаждение',
    value: ['Активное, 1 вентилятор, Тепловые трубки']
  },
  powerConnector: {
    name: 'Коннектор питания',
    value: ['8-pin']
  },
  minPowerSupply: {
    name: 'Минимальный блок питания',
    value: ['550 Вт']
  },
  slots: {
    name: 'Слоты',
    value: ['2']
  },
  misc: {
    name: 'Допонительно',
    value: [`Микроархитектура Nvidia Ampere
          Ядра RT 2-го поколения
          Тензорные ядра 3-го поколения
          Компактный форм-фактор для miniITX систем
          Защитная задняя панель
          Приложение MSI Center`]
  },
  length: {
    name: 'Длинна',
    value: ['17.2 см']
  },
  sizes: {
    name: 'Размеры',
    value: ['7 х 1.6 х 14.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12 мес']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const hdd = {
  cost: {
    name: 'Цена',
    value: ['50000', '53000', '20000', '60000', '45000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Western Digital ', 'Toshiba', 'Seagate']
  },
  modelArr: {
    name: 'Модель',
    value: ['WD181KFGX', 'WD121KRYZ', 'ST14000NM001G', 'ST12000VE001']
  },
  series: {
    name: 'Серия',
    value: ['Performance X300', 'Performance X500']
  },
  formFactor: {
    name: 'Форм-фактор',
    value: ['3.5"']
  },
  interface: {
    name: 'Интерфейс',
    value: ['SATA III']
  },
  throughput: {
    name: 'Пропускная скорость',
    value: ['6 Гбит/с']
  },
  capacity: {
    name: 'Емкость',
    value: ['8 ТБ', '12 ТБ', '24 ТБ', '20 ТБ']
  },
  bitDepth: {
    name: 'Емкость',
    value: ['128 бит', '256 бит', '64 бит']
  },
  rotateSpeed: {
    name: 'Скорость вращения',
    value: ['7200 об./мин.']
  },
  accessTime: {
    name: 'Время доступа',
    value: ['4.17 мс']
  },
  noiseLevel: {
    name: 'Уровень шума',
    value: ['20 дБ']
  },
  voltage: {
    name: 'Напряжение',
    value: ['1.35 В']
  },
  timings: {
    name: 'Тайминги',
    value: ['CL40-40-40']
  },
  slots: {
    name: 'Слоты',
    value: ['2']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Накопитель подходит для любителей компьютерных игр, графических дизайнеров и других пользователей с высокими требованиями к ресурсоемкому контенту
          Встроенный датчик ударов
          Технология ramp loading`]
  },
  sizes: {
    name: 'Размеры',
    value: ['4.6 х 1.1 х 4.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const ssd = {
  cost: {
    name: 'Цена',
    value: ['50000', '53000', '20000', '60000', '45000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['Western Digital ', 'Toshiba', 'Seagate']
  },
  modelArr: {
    name: 'Модель',
    value: ['WD181KFGX', 'WD121KRYZ', 'ST14000NM001G', 'ST12000VE001']
  },
  series: {
    name: 'Серия',
    value: ['Performance X300', 'Performance X500']
  },
  formFactor: {
    name: 'Форм-фактор',
    value: ['3.5"']
  },
  interface: {
    name: 'Интерфейс',
    value: ['SATA III']
  },
  throughput: {
    name: 'Пропускная скорость',
    value: ['6 Гбит/с']
  },
  capacity: {
    name: 'Емкость',
    value: ['8 ТБ', '12 ТБ', '24 ТБ', '20 ТБ']
  },
  bitDepth: {
    name: 'Емкость',
    value: ['128 бит', '256 бит', '64 бит']
  },
  rotateSpeed: {
    name: 'Скорость вращения',
    value: ['7200 об./мин.']
  },
  accessTime: {
    name: 'Время доступа',
    value: ['4.17 мс']
  },
  noiseLevel: {
    name: 'Уровень шума',
    value: ['20 дБ']
  },
  voltage: {
    name: 'Напряжение',
    value: ['1.35 В']
  },
  timings: {
    name: 'Тайминги',
    value: ['CL40-40-40']
  },
  slots: {
    name: 'Слоты',
    value: ['2']
  },
  misc: {
    name: 'Дополнительно',
    value: [`Накопитель подходит для любителей компьютерных игр, графических дизайнеров и других пользователей с высокими требованиями к ресурсоемкому контенту
          Встроенный датчик ударов
          Технология ramp loading`]
  },
  sizes: {
    name: 'Размеры',
    value: ['4.6 х 1.1 х 4.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const powerSupply = {
  cost: {
    name: 'Цена',
    value: ['50000', '53000', '20000', '60000', '45000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['ASUS', 'Antec', 'Aerocool', 'be quiet!', 'Chieftec', 'Cooler Master', 'Cougar', 'Corsair', 'DeepCool', 'EVGA', 'Enermax', 'Fractal Design', 'FSP', 'Gigabyte', 'HuntKey', 'MSI', 'NZXT', 'Thermaltake', 'Seasonic']
  },
  modelArr: {
    name: 'Модель',
    value: ['Toughpower GF2 ARGB', 'Toughpower GF1 ARGB', ' SSP-300SFB', 'Toughpower SFX', 'Toughpower SFX', 'AURIC 750', 'PF650D-HA', 'PF750D-HA', 'PF550', 'PQ1000M', ' Toughpower TF1', 'Power Pro 12', 'SSP-1000RS']
  },
  formFactor: {
    name: 'Форм-фактор',
    value: ['ATX']
  },
  series: {
    name: 'Серия',
    value: ['XPG', 'Performance X500']
  },
  power: {
    name: 'Мощность',
    value: ['1000Вт']
  },
  PFC: {
    name: 'PFC',
    value: ['Активная']
  },
  standard: {
    name: 'Стандарт',
    value: ['80 PLUS Gold']
  },
  KPD: {
    name: 'КПД',
    value: ['до 90%']
  },
  connectors: {
    name: "Коннекторы",
    value: ['20+4, 20+4+8, 24+4, 24+8, 24+4+8, 24+8+8']
  },
  videoScheme: {
    name: 'Видео коннекторы',
    value: ['6 pin, 8 pin, 6+6 pin, 6+8 pin, 8+8 pin , 8+8+8 pin']
  },
  PCIEConNums6pin: {
    name: 'Количество PCIEx 6 пин',
    value: ['6']
  },
  PCIEConNums2pin: {
    name: 'Количество PCIEx 2 пин',
    value: ['9']
  },
  PCIEConNums4pin: {
    name: 'Количество PCIEx 4 пин',
    value: ['1']
  },
  SATAConNums: {
    name: 'Количество SATA',
    value: ['6']
  },
  length: {
    name: 'Длинна',
    value: ['50 см питание мат. платы  55 см питание CPU  52 см PCI-E  35, 42, 57 см SATA  43, 48, 58 см Molex']
  },
  inputVoltage: {
    name: 'Входящее напряжение',
    value: ['100 ~ 240 В']
  },
  inputFreq: {
    name: 'Входящая частота',
    value: ['50 ~ 60 Гц']
  },
  sizes: {
    name: 'Размеры',
    value: ['4.6 х 1.1 х 4.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}

export const pccases = {
  cost: {
    name: 'Цена',
    value: ['50000', '53000', '20000', '60000', '45000']
  },
  brandArr: {
    name: 'Брэнд',
    value: ['2E ', 'Aerocool ', 'ASUS ', 'be quiet!', 'Cooler Master', 'Corsair ', 'Cougar ', 'DeepCool ', 'Delux ', 'Fractal Design', 'GameMax', 'GamerStorm', 'Gigabyte ', 'HuntKey ', 'MSI ', 'Lian Li ', 'NZXT', 'Thermaltake', 'Seasonic']
  },
  modelArr: {
    name: 'Модель',
    value: ['D527 TG, Black', ' Alfa E190-3U', 'Alfa E1802', 'Flame D525-B TG', 'Zalman M3', 'View 71 TG ARGB', 'The Tower 100', '500 TG Air', 'Archon 2 RGB', 'CG560', 'Falcon-G-BK-v1', 'XC-370-2', 'Zalman X3']
  },
  formFactor: {
    name: "Форм-фактор",
    value: ['ATX']
  },
  material: {
    name: 'Материал',
    value: ['Сталь 0.5 мм, пластик']
  },
  features: {
    name: 'Преимущества',
    value: ['Кабель-менеджемент']
  },
  powerSupply: {
    name: 'Блок питания',
    value: ['Нет']
  },
  powerSupplyLocation: {
    name: 'Расположение блока питания',
    value: ['Верхнее']
  },
  maxLengthCabel: {
    name: "Макс длинна кабеля",
    value: ['150']
  },
  fasteningHDD: {
    name: 'Крепление HDD',
    value: ['Винтовое']
  },
  nums525: {
    name: 'Количество 525',
    value: ['2']
  },
  insidenums525: {
    name: 'Внутреннее количество 525',
    value: ['3']
  },
  insidenums25: {
    name: 'Внутреннее количество 25',
    value: ['4']
  },
  insidenums35: {
    name: 'Внутреннее количество 25',
    value: ['5']
  },
  buttons: {
    name: 'Кнопки',
    value: ['Power, Reset']
  },
  led: {
    name: 'Индикаторы',
    value: ['HDD, Power']
  },
  slotNums: {
    name: "Количество слотов",
    value: ['7']
  },
  installationType: {
    name: 'Тип установки',
    value: ['Горизонтальная']
  },
  maxVideoLength: {
    name: "Макс длинна видеокарты",
    value: ['310']
  },
  maxHighCooler: {
    name: 'Макс высота кулера',
    value: ['145']
  },
  SupportCoolerDiam: {
    name: 'Поддержка диаметра куллера',
    value: ['80 мм, 90 мм, 120 мм']
  },
  SATAConNums: {
    name: 'Количество SATA коннекторов',
    value: ['6']
  },
  sizes: {
    name: 'Размеры',
    value: ['4.6 х 1.1 х 4.7 см']
  },
  weight: {
    name: 'Вес',
    value: ['0.036 кг', '0.04 кг']
  },
  warranty: {
    name: 'Гарантия',
    value: ['12']
  },
  site: {
    name: 'Сайт',
    value: ['www.infinixmobility.com', 'apple.com']
  }
}