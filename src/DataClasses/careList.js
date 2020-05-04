const CareList = {
    "0": {
        "name": "Биполярное расстройство",
        "description": "Рекомендации по поддержанию состояния больного с биполярным расстройством. План ежедневных действий для больного.",
        "recommendations": {
            "0": {
                "name": "Заполняйте таблицу настроения",
                "description": "Ежедневно заполняйте таблицу настроения. Это поможет вам самоорганизоваться, а выводимая статистика покажет вам, как изменяется ваше состояние с течением времени."
            },
            "1": {
                "name": "Каждый день общайтесь с людьми.",
                "description": "Повседневное общение поможет поддерживать и даже улучшать ваше состояние."
            },
            "2": {
                "name": "Соблюдайте диету.",
                "description": "Диета поможет вашей самоорганизации, а также позволит компенсировать побочные действия некоторых лекарств."
            },
            "3": {
                "name": "Поддерживайте физическую активность.",
                "description": "Полезно"
            },
            "4": {
                "name": "Какая-то рекомендация, не входящяя в дневной план.",
                "description": "Просто потому, что нужно отметить наличие такой возможности."
            },
        },
        "dailyPlan": {
            "0": {
                "type": "survey",
                "text": "Заполнить таблицу настроения",
                "surveyId": "0"
            },
            "1": {
                "type": "checkbox",
                "text": "Пообщаться с кем-нибудь"
            },
            "2": {
                "type": "checkbox",
                "text": "Сделать зарядку"
            },
            "3": {
                "type": "checkbox",
                "text": "Записать, что сегодня было съедено"
            },
        },
        "help": {
            "text": "Документ с рекомендациями по лечению: https://docviewer.yandex.ru/view/54494196/?*=w18aU9NF29Apf8E5PPLHEURaBNh7InVybCI6Imh0dHBzOi8vd3d3LmJpcG9sYXIuc3Uvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvaW5zdHJ1bWVudGFyaWotYmlwb2x5YXJuaWthLnBkZiIsInRpdGxlIjoiaW5zdHJ1bWVudGFyaWotYmlwb2x5YXJuaWthLnBkZiIsIm5vaWZyYW1lIjp0cnVlLCJ1aWQiOiI1NDQ5NDE5NiIsInRzIjoxNTg4NTI0ODIwNDkxLCJ5dSI6Ijg4NzA5NjgxNjE1NTQyNDIyMTkiLCJzZXJwUGFyYW1zIjoibGFuZz1ydSZ0bT0xNTg4NTI0ODE4JnRsZD1ydSZuYW1lPWluc3RydW1lbnRhcmlqLWJpcG9seWFybmlrYS5wZGYmdGV4dD0lRDAlQjglRDAlQkQlRDElODElRDElODIlRDElODAlRDElODMlRDAlQkMlRDAlQjUlRDAlQkQlRDElODIlRDAlQjAlRDElODAlRDAlQjglRDAlQjkrJUQwJUIxJUQwJUI4JUQwJUJGJUQwJUJFJUQwJUJCJUQxJThGJUQxJTgwJUQwJUJEJUQwJUI4JUQwJUJBJUQwJUIwJnVybD1odHRwcyUzQS8vd3d3LmJpcG9sYXIuc3Uvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvaW5zdHJ1bWVudGFyaWotYmlwb2x5YXJuaWthLnBkZiZscj0yJm1pbWU9cGRmJmwxMG49cnUmc2lnbj1lMjJhYzM1NDliZGIzN2ZkMmFiMGUzZDgxZjRkNGFmNCZrZXlubz0wIn0%3D&lang=ru"
        }
    }
};

exports.CareList = CareList;