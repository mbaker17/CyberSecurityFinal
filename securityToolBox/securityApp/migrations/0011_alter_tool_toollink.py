# Generated by Django 3.2.10 on 2022-05-06 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('securityApp', '0010_auto_20220502_1459'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tool',
            name='ToolLink',
            field=models.URLField(null=True),
        ),
    ]
