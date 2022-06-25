
export const processors = {
  catalog: 'Процессоры',
  title: "Процессор",
  cost: '20000',
  params: {
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
  }
}

export const motherboards = {
  catalog: "Материнские платы",
  title: "Материнская платы",
  cost: '20000',
  params: {
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
  }
}

export const ram = {
  catalog: "Оперативная память",
  title: "Оперативная память",
  cost: '100000',
  params: {
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
  }
}

export const video = {
  catalog: "Видеокарты",
  title: "Видеокарта",
  cost: '150000',
  params: {
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
  }
}

export const hdd = {
  catalog: "Жесткие диски",
  title: "Жесткий диск",
  cost: '150000',
  params: {
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
  }
}

export const ssd = {
  catalog: "SSD диски",
  title: "SSD диск",
  cost: '50000',
  params: {
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
  }
}
  
export const powerSupply = {
  catalog: "Блоки питания",
  title: "Блок питания",
  cost: '30000',
  params: {
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
  }
}

export const pccases = {
  catalog: "Корпуса",
  title: "Корпус",
  cost: '130000',
  params: {
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
  }
}

export const chargersData = {
  catalog: "Зарядные устройства",
  title: "Зарядное устройство",
  cost: '20000',
  params: {
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
  }
}

export const phoneCases = {
  catalog: "Чехлы для телефона",
  title: "Чехол для телефона",
  cost: '20000',
  params: {
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
  }
}

export const books = {
  catalog: "Электронные книги",
  title: "Электронная книга",
  cost: '10000',
  params: {
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
  }
}

export const monopods = {
  catalog: "Моноподы",
  title: "Моноподы",
  cost: '100000',
  params: {
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
  }
}

export const smartphones = {
  catalog: "Смартфоны",
  title: "Смартфон",
  cost: '100000',
  params: {
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
  }
}

export const pushButtonPhones = { 
  catalog: "Телефоны",
  title: "Телефон",
  cost: '100000',
  params: {
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
  }
}
