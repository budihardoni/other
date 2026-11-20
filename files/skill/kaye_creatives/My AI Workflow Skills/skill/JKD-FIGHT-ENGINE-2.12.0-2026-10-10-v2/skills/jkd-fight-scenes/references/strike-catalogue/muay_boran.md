# Муай-боран

Пользовательские коды этого раздела — [короткая шпаргалка](../short-codes/muay_boran.md).

Данные выбранной школы/постановочной семьи — [muay_boran.json](muay_boran.json). Статус имени не подтверждает полный видеоразбор.

## Удары и варианты

| Название и оригинал | Тег | Краткая форма | Основание |
|---|---|---|---|
| Удар головой — Head-butt | `@STRIKE_MUAY_BORAN_HEADBUTT` | Голова проходит коротким ударным движением. | имя в источнике. Компонент школьного IMBA, не разрешение современного Muay Thai. |
| Прямой кулак — Straight punch | `@STRIKE_MUAY_BORAN_STRAIGHT_PUNCH` | Кулак проходит прямо вперёд. | имя в источнике. Компонент IMBA, без полной Mai-последовательности. |
| Размашистый круговой кулак — Swing punch | `@STRIKE_MUAY_BORAN_SWING_PUNCH` | Кулак проходит широкой боковой дугой. | имя в источнике. Компонент, встречающийся в Narai Kwang Jak; форма целиком сюда не скопирована. |
| Восходящий кулак — Uppercut | `@STRIKE_MUAY_BORAN_UPPERCUT` | Согнутый кулак проходит снизу вверх. | имя в источнике. Muay Korat/IMBA; symbolic Hanuman name зависит от школьной версии. |
| Кулак назад с разворотом — Spinning back punch | `@STRIKE_MUAY_BORAN_SPINNING_BACK_PUNCH` | Разворот корпуса сопровождает дуговой проход кулака назад. | имя в источнике. Ударный компонент Kwang Jak Narai в IMBA. |
| Боковой удар предплечьем — Forearm strike | `@STRIKE_MUAY_BORAN_HORIZONTAL_FOREARM` | Предплечье проходит боковой дугой. | имя в источнике. Ударный компонент Narai Ban Sean; не весь контрприём. |
| Нисходящее предплечье — Downward forearm blow | `@STRIKE_MUAY_BORAN_DOWNWARD_FOREARM` | Предплечье проходит сверху вниз. | имя в источнике. Ударный компонент Pak Tay Toy; связка с локтем отдельно. |
| Горизонтальный локоть — Sok Dtad | `@STRIKE_MUAY_BORAN_HORIZONTAL_ELBOW` | Локоть проходит боковой горизонтальной дугой. | имя в источнике. Пример категории Sok Wiang Lai в IMBA. |
| Прямой проникающий локоть — Sok Pung | `@STRIKE_MUAY_BORAN_PENETRATING_ELBOW` | Острие согнутого локтя проходит вперёд вместе с корпусом. | имя в источнике. Пример категории Sok Krataek в IMBA. |
| Нисходящий локоть — Sok Sahb | `@STRIKE_MUAY_BORAN_DOWNWARD_ELBOW` | Локоть проходит сверху вниз. | имя в источнике. Пример категории Sok Dti Lom в IMBA. |
| Восходящий локоть — Sok Ngad | `@STRIKE_MUAY_BORAN_UPPERCUT_ELBOW` | Согнутый локоть проходит снизу вверх. | имя в источнике. Пример категории Sok Soei Kheun в IMBA. |
| Локоть назад с разворотом — Sok Glab Lang | `@STRIKE_MUAY_BORAN_SPINNING_BACK_ELBOW` | Разворот корпуса сопровождает проход локтя назад. | имя в источнике. Конкретные углы варьируются по партнёрской позиции. |
| Прямое колено — Straight knee | `@STRIKE_MUAY_BORAN_STRAIGHT_KNEE` | Колено проходит прямо вперёд. | имя в источнике. Компонент нескольких Mai IMBA; захват не требуется самим названием. |
| Круговой удар ногой — Round kick / swing kick | `@STRIKE_MUAY_BORAN_ROUND_KICK` | Нога проходит боковой круговой дугой. | имя в источнике. Школьная общая семья, не единая точная версия всех регионов. |
| Фронтальный толчковый удар — Straight kick | `@STRIKE_MUAY_BORAN_FRONT_PUSH_KICK` | Стопа проходит прямо вперёд. | вариант семейства. Редакционно выбран фронтальный компонент IMBA; термин straight kick шире этого выбора. |
| Одновременный двойной апперкот — Double uppercut punch | `@STRIKE_MUAY_BORAN_DOUBLE_UPPERCUT` | Оба кулака одновременно проходят снизу вверх. | имя в источнике. Только ударная фаза известного Hanuman Tawai Waen; Korat-вариант источника одиночный. |

## Источники и границы

- [IMBA — Muay Boran IMBA, volume 1, Marco De Cesaris](https://www.muaythai.it/books/2018/muay-boran-imba/MBI_web_en.pdf) — Свежо прочитан официальный публичный PDF через curl/pdftotext: body weapons и именованные стратегические формы с straight/swing/uppercut/spinning punch, forearm blows, knee, kick, headbutts. Компоненты отделены от целых Mai.
- [IMBA / Marco De Cesaris — The elbow: Muay Thai’s bladed weapon, part 1](https://www.muaythai.it/the-elbow-muay-thais-bladed-weapon-part-1/) — Свежо прочитан авторский школьный текст пяти категорий; примеры Sok Dtad, Sok Pung, Sok Sahb, Sok Ngad, Sok Glab Lang; виды и категории не считаются дважды.
- [IMBA — Hanuman Tawai Waen, Muay Korat](https://www.muaythai.it/muay-korat-hanuman-tawai-waen/) — Свежо прочитан: известная двойная uppercut-фигура и иной одиночный uppercut варианта Muay Korat; одинаковое символическое имя не означает одинаковую механику.
- [IMBA — Muay Boran](https://win.muaythai.it/english/muayboran.html) — Свежо проверено собственное описание IMBA: современная организация традиционных региональных элементов и девять body weapons, включая голову; это отдельная линия, не ринговые правила Muay Thai.
