{
    "debug": true,
    "layout": "vertical",
    "properties": {
        "name": {
            "type": "string",
            "title": "用户名",
            "placeholder": "请输入用户名，且2位以上",
            "minLength": 2
        },
        "password": {
            "type": "string",
            "widget": "password",
            "title": "密码",
            "placeholder": "请输入密码，且6位以上",
            "minLength": 6
        }
    },
    "required": [
        "name",
        "password"
    ],
    "button": {
        "grid": {
            "offset": 5
        },
        "items": [{
                "label": "登录",
                "id": "send",
                "submit": true
            },
            {
                "label": "重置",
                "id": "reset"
            }
        ]
    }
}