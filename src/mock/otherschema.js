{
    "debug": true,
    "modelName": "testModel",
    "fieldsets": [{
            "fields": [
                "title",
                "description"
            ],
            "id": "default",
            "title": "Default"
        },
        {
            "fields": [
                "author",
                "language",
                "numberOfBoxes"
            ],
            "id": "settings",
            "title": "Settings"
        }
    ],
    "properties": {
        "description": {
            "description": "Short description",
            "placeholder": "textarea string",
            "minLength": 0,
            "readOnly": false,
            "title": "Summary",
            "type": "string",
            "widget": "textarea"
        },
        "title": {
            "description": "",
            "title": "Title",
            "maxLength": 10,
            "type": "string"
        },
        "author": {
            "description": "",
            "title": "Author",
            "type": "string"
        },
        "language": {
            "description": "",
            "oneOf": [{
                    "description": "English",
                    "enum": [
                        "en"
                    ]
                },
                {
                    "description": "Chinese",
                    "enum": [
                        "zh"
                    ]
                }
            ],
            "title": "Language",
            "type": "string",
            "widget": "select"
        },
        "numberOfBoxes": {
            "type": "number",
            "widget": {
                "id": "range"
            },
            "description": "Number of boxes required",
            "minimum": 1,
            "maximum": 10
        }
    },
    "required": [
        "title"
    ],
    "button": {
        "items": [{
                "label": "Alert",
                "id": "alert",
                "submit": true,
                "offset": 4
            },
            {
                "label": "Reset",
                "id": "reset"
            }
        ]
    }
}