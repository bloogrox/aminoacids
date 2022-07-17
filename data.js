const aminoacids = {
    'Аланин': {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/L-Alanin_-_L-Alanine.svg/800px-L-Alanin_-_L-Alanine.svg.png',
        tags: ['Заменимые', 'Нейтральный pH', 'Неполярные', 'Алифатические',]
    },
    'Валин': {
        url: 'data:image/png;base64,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',
        tags: ['Незаменимые', 'Нейтральный pH', 'Неполярные', 'Алифатические',]
    },
    'Лейцин': {
        url: 'https://thumbs.dreamstime.com/b/%D0%BB%D0%B5%D0%B9%D1%86%D0%B8%D0%BD-%D0%B0%D0%BC%D0%B8%D0%BD%D0%BE%D0%BA%D0%B8%D1%81%D0%BB%D0%BE%D1%82-%D1%85%D0%B8%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BE%D0%B1%D1%89%D0%B0%D1%8F-%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0-%D0%BB%D0%B5%D0%B9%D1%86%D0%B8%D0%BD%D0%B0-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-214125510.jpg',
        tags: ['Незаменимые', 'Нейтральный pH', 'Неполярные', 'Алифатические',]
    },
    'Изолейцин': {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Isoleucin_-_Isoleucine.svg/1200px-Isoleucin_-_Isoleucine.svg.png',
        tags: ['Незаменимые', 'Нейтральный pH', 'Неполярные', 'Алифатические',]
    },
    'Метионин': {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Methionin_-_Methionine.svg/1200px-Methionin_-_Methionine.svg.png',
        tags: ['Незаменимые', 'Нейтральный pH', 'Неполярные', 'Серосодержащие',],
    },
    'Пролин': {
        url: 'https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-147-85-3.jpg-650.jpg',
        tags: ['Заменимые', 'Нейтральный pH', 'Неполярные', 'Алифатические',]
    },
    'Фенилаланин': {
        url: 'https://dic.academic.ru/pictures/wiki/files/80/Phenylalanine.png',
        tags: ['Незаменимые', 'Нейтральный pH', 'Неполярные', 'Ароматические',]
    },
    'Тирозин': {
        url: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6057&t=l',
        tags: ['Заменимые', 'Нейтральный pH', 'Неполярные', 'Ароматические', 'Содержащие ОН-группу',]
    },
    'Триптофан': {
        url: 'data:image/png;base64,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',
        tags: ['Незаменимые', 'Нейтральный pH', 'Неполярные', 'Ароматические',]
    },
    'Глицин': {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Glycin_-_Glycine.svg/640px-Glycin_-_Glycine.svg.png',
        tags: ['Заменимые', 'Нейтральный pH', 'Незаряженные', 'Алифатические', 'Полярные', ]
    },
    'Серин': {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Serine.png',
        tags: ['Заменимые', 'Нейтральный pH', 'Незаряженные', 'Содержащие ОН-группу', 'Полярные', ]
    },
    'Треонин': {
        url: 'https://glossary.periodni.com/images/serine.jpg',
        tags: ['Незаменимые', 'Нейтральный pH', 'Незаряженные', 'Содержащие ОН-группу', 'Полярные', ]
    },
    'Цистеин': {
        url: 'https://glossary.periodni.com/images/cysteine.jpg',
        tags: ['Заменимые', 'Нейтральный pH', 'Незаряженные', 'Полярные', 'Серосодержащие',]
    },
    'Глутамин': {
        url: 'https://glossary.periodni.com/images/glutamine.jpg',
        tags: ['Заменимые', 'Нейтральный pH', 'Незаряженные', 'Полярные', 'Доп. NH2-группа',]
    },
    'Аспарагин': {
        url: 'https://glossary.periodni.com/images/asparagine.jpg',
        tags: ['Заменимые', 'Нейтральный pH', 'Незаряженные', 'Полярные', 'Доп. NH2-группа',]
    },
    'Глутаминовая кислота': {
        url: 'https://glossary.periodni.com/images/glutamic_acid.jpg',
        tags: ['Заменимые', 'Кислые', 'Отрицат. заряд', 'Доп. СООН-группа', 'Полярные', ]
    },
    'Аспарагиновая кислота': {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Asparagins%C3%A4ure_-_Aspartic_acid.svg/1200px-Asparagins%C3%A4ure_-_Aspartic_acid.svg.png',
        tags: ['Заменимые', 'Кислые', 'Отрицат. заряд', 'Доп. СООН-группа', 'Полярные', ]
    },
    'Лизин': {
        url: 'https://cdn.w600.comps.canstockphoto.com/amino-acid-lysine-chemical-molecular-vector-clip-art_csp90878117.jpg',
        tags: ['Незаменимые', 'Основные', 'Положит. заряд', 'Полярные', 'Доп. NH2-группа',]
    },
    'Аргинин': {
        url: 'https://cdn.w600.comps.canstockphoto.com/arginine-amino-acid-chemical-molecular-vector-clip-art_csp90878113.jpg',
        tags: ['Условно незаменимые', 'Основные', 'Положит. заряд', 'Полярные', 'Доп. NH2-группа',]
    },
    'Гистидин': {
        url: 'https://www.carlroth.com/medias/1696-SF-1000Wx1000H?context=bWFzdGVyfGltYWdlc3wzNDk1NnxpbWFnZS9qcGVnfGltYWdlcy9oZDMvaDdiLzg5NDA1MzgzOTY3MDIuanBnfDNmMWNlZTFiMjViN2JlNzc0N2RjYzJkNzZjNmQzZWY2NGRlZGY4ZGQyZTZiZGY0M2QwZjQwYThkNzQ4NmM0MTQ',
        tags: ['Условно незаменимые', 'Основные', 'Положит. заряд', 'Полярные', 'Доп. NH2-группа',]
    },
};
