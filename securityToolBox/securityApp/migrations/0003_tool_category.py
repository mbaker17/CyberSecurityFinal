# Generated by Django 3.2.10 on 2022-05-01 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('securityApp', '0002_rename_categroyname_categories_categoryname'),
    ]

    operations = [
        migrations.AddField(
            model_name='tool',
            name='Category',
            field=models.CharField(default='None', max_length=100),
        ),
    ]