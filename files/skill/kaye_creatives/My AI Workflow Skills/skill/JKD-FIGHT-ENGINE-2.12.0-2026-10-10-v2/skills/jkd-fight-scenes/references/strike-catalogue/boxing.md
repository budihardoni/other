# Бокс

Пользовательские коды этого раздела — [короткая шпаргалка](../short-codes/boxing.md).

Данные выбранной школы/постановочной семьи — [boxing.json](boxing.json). Статус имени не подтверждает полный видеоразбор.

## Удары и варианты

| Название и оригинал | Тег | Краткая форма | Основание |
|---|---|---|---|
| Джеб — Jab / straight lead | `@STRIKE_BOXING_JAB` | Ведущий кулак движется прямо вперёд. | имя в источнике. Ведущая рука зависит от стойки, а не от фиксированного лево/право. |
| Джеб в корпус — Straight lead to the body | `@STRIKE_BOXING_BODY_JAB` | Прямой ведущий кулак проходит на уровне корпуса. | имя в источнике. Уровень прямо выделен в handbook. |
| Прямой задней рукой — Cross / straight rear hand | `@STRIKE_BOXING_REAR_STRAIGHT` | Задний кулак проходит по прямой с поворотом корпуса. | имя в источнике. Cross — распространённое имя; отдельные школы различают cross и straight. |
| Прямой задней рукой в корпус — Straight rear hand to body | `@STRIKE_BOXING_REAR_BODY_STRAIGHT` | Задний кулак проходит прямо на уровне корпуса. | имя в источнике. Не отдельная новая семья, а именованный уровень. |
| Хук ведущей рукой — Lead hook | `@STRIKE_BOXING_LEAD_HOOK` | Ведущий согнутый кулак описывает боковую дугу. | имя в источнике. Сторона привязана к стойке. |
| Хук задней рукой — Rear hook | `@STRIKE_BOXING_REAR_HOOK` | Задний согнутый кулак описывает боковую дугу. | имя в источнике. Сторона привязана к стойке. |
| Хук ведущей рукой в корпус — Lead body hook | `@STRIKE_BOXING_LEAD_BODY_HOOK` | Ведущий кулак проходит боковой дугой на уровне корпуса. | вариант семейства. Постановочное разделение уровня и ведущей руки внутри documented hook family. |
| Хук задней рукой в корпус — Rear body hook | `@STRIKE_BOXING_REAR_BODY_HOOK` | Задний кулак проходит боковой дугой на уровне корпуса. | вариант семейства. Постановочное разделение уровня и задней руки внутри documented hook family. |
| Апперкот ведущей рукой — Lead uppercut | `@STRIKE_BOXING_LEAD_UPPERCUT` | Ведущий согнутый кулак проходит снизу вверх. | имя в источнике. Сторона привязана к стойке. |
| Апперкот задней рукой — Rear uppercut | `@STRIKE_BOXING_REAR_UPPERCUT` | Задний согнутый кулак проходит снизу вверх. | имя в источнике. Сторона привязана к стойке. |
| Апперкот ведущей рукой в корпус — Lead body uppercut | `@STRIKE_BOXING_LEAD_BODY_UPPERCUT` | Ведущий кулак поднимается короткой дугой на уровне корпуса. | вариант семейства. Постановочное разделение руки внутри documented body uppercut family. |
| Апперкот задней рукой в корпус — Rear body uppercut | `@STRIKE_BOXING_REAR_BODY_UPPERCUT` | Задний кулак поднимается короткой дугой на уровне корпуса. | вариант семейства. Постановочное разделение руки внутри documented body uppercut family. |
| Джеб с шагом — Step jab | `@STRIKE_BOXING_STEP_JAB` | Прямой ведущий кулак сопровождается шагом вперёд. | имя в источнике. Именованный вариант входа, не новая ударная поверхность. |
| Фликер-джеб — Flicker jab | `@STRIKE_BOXING_FLICKER_JAB` | Ведущая рука выбрасывает короткий хлёсткий прямой удар. | имя в источнике. Школьное имя; высота исходной руки меняется между тренерами. |
| Силовой джеб — Power jab | `@STRIKE_BOXING_POWER_JAB` | Прямой ведущий кулак сопровождается заметным движением корпуса. | имя в источнике. Название манеры исполнения, без измеренной силы. |
| Диагональный шовел-хук — Shovel hook | `@STRIKE_BOXING_SHOVEL_HOOK` | Согнутый кулак проходит промежуточной дугой между хуком и апперкотом. | имя в источнике. Mexican uppercut — alias в указанной школе. |
| Оверхенд — Overhand | `@STRIKE_BOXING_OVERHAND` | Кулак описывает высокую нисходящую дугу. | имя в источнике. Не равен прямому cross; здесь без фиксированной руки. |
| Чек-хук с поворотом — Traditional check hook | `@STRIKE_BOXING_CHECK_HOOK` | Хук сопровождается боковым поворотом исполнителя. | имя в источнике. Check задаёт ответ и перемещение, а не новую поверхность кулака. |
| Чек-хук с боковым шагом — Sidestep / lead check hook | `@STRIKE_BOXING_SIDESTEP_CHECK_HOOK` | Хук сопровождается боковым шагом. | имя в источнике. Lead Check Hook — школьное название конкретного sidestep-варианта. |
| Чек-хук с шагом назад — Backstep check hook | `@STRIKE_BOXING_BACKSTEP_CHECK_HOOK` | Хук сопровождается шагом назад. | имя в источнике. Вариант входа/выхода того же hook family. |
| Чек-хук со сменой стойки — Switch stance check hook | `@STRIKE_BOXING_SWITCH_CHECK_HOOK` | Хук проходит новой ведущей рукой после смены стойки. | имя в источнике. Именованный школьный вариант. |
| Боло-апперкот — Bolo punch, uppercut finish | `@STRIKE_BOXING_BOLO_UPPERCUT` | Круговой замах руки завершается восходящим кулаком. | вариант семейства. Источник прямо допускает эту завершающую линию. |
| Боло-хук — Bolo punch, hook finish | `@STRIKE_BOXING_BOLO_HOOK` | Круговой замах руки завершается боковым кулаком. | вариант семейства. Источник прямо допускает эту завершающую линию. |
| Прыжковый хук «газель» — Gazelle punch | `@STRIKE_BOXING_GAZELLE_HOOK` | Исполнитель проходит вперёд небольшим прыжком с хуком. | имя в источнике. Название из первичного урока western boxing, не универсальный syllabus. |
| Нисходящий диагональный хук — Downward angled hook | `@STRIKE_BOXING_DOWNWARD_HOOK` | Согнутый кулак проходит боковой дугой с уклоном вниз. | имя в источнике. Словесно упомянут в школьном тексте shovel hook. |

## Источники и границы

- [England Boxing — Level 1 Coaching Handbook](https://www.englandboxing.org/wp-content/uploads/2022/03/EB_Boxing-Coaching-Handbook-Part-1_v8-002.pdf) — Свежо прочитаны разделы straight punches и bent arm punches, файл-страницы 71–78: прямые ведущей/задней рукой, голова/корпус, hook и uppercut; это учебная редакция, не текущий регламент.
- [England Boxing — Level 2 Coaching Handbook](https://www.englandboxing.org/wp-content/uploads/2022/03/Level-2-Coaching-Handbook-compressed.pdf) — Web отклонил крупный PDF; публичный PDF прочитан через curl/pdftotext: hooks/uppercuts к голове и корпусу, левые/правые uppercuts, разделы punching/padwork; длинный/короткий hook отдельным официальным реестром здесь не объявлен.
- [Evolve MMA — 5 Types Of Jabs All Boxers Need To Know](https://evolve-mma.com/blog/5-types-of-jabs-all-boxers-need-to-know/) — Свежо прочитан публичный HTML: Basic Jab, Range-Finder, Step Jab, Double Jab, Power Jab; double jab оставлен связкой, range-finder — функцией джеба.
- [Evolve University — How To Use The Jab As A Defensive And Offensive Weapon](https://evolve-university.com/blog/how-to-use-the-jab-as-a-defensive-and-offensive-weapon/) — Свежо прочитан школьный текст, явно названы Flicker Jab, Power Jab, Counter Jab; counter не выделен как новая траектория.
- [Evolve University — How To Throw A Shovel Hook In Boxing](https://evolve-university.com/blog/how-to-throw-a-shovel-hook-in-boxing/) — Свежо прочитан: Shovel Hook, школьный alias Mexican uppercut, промежуточная диагональная линия; отдельно упомянут downward angled hook. Медицинские объяснения и обещания эффективности не перенесены.
- [Evolve University — 5 Check Hook Variations](https://evolve-university.com/blog/level-up-your-boxing-game-with-these-5-check-hook-variations/) — Свежо прочитаны Traditional Check Hook, sidestep/Lead Check Hook, Backstep и Switch Stance; Pivot Out сведён к тому же семейству, не самостоятельному новому удару.
- [Evolve University — What Is The Bolo Punch?](https://evolve-university.com/blog/what-is-the-bolo-punch/) — Свежо прочитана школьная трактовка широкого кругового замаха; автор прямо допускает hook и uppercut как разные завершающие линии.
- [Clubb Chimera — Efficient Inside Combinations & Lateral Footwork](https://www.clubbchimera.com/post/efficient-inside-combinations-lateral-footwork-diary-entry) — Первичный дневник урока Jamie Clubb: курс western boxing, step-jab, gazelle punch с прыжковым hook, overhand; свежо проверен публичный текст.
- [Evolve University — What Is The Corkscrew Punch In Boxing?](https://evolve-university.com/blog/what-is-the-corkscrew-punch-in-boxing/) — Свежо прочитаны corkscrew straight/hook/uppercut, overhand; поворот руки является вариантом внутри семейства, а не обязательным самостоятельным видом удара.
- [Evolve MMA — The Complete Glossary Of Muay Thai Strikes, Moves, And Techniques](https://evolve-mma.com/blog/the-complete-glossary-of-muay-thai-strikes-moves-and-techniques/) — Свежо прочитаны школьные названия Jab, Cross, Hook, Uppercut, Body-Rip/Body-Hook, Spinning Back Fist, Superman Punch, Overhand; перечень школы, не общий обязательный реестр.
