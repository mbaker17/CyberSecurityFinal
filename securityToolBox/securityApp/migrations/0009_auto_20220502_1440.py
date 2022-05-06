# Generated by Django 3.2.10 on 2022-05-02 20:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('securityApp', '0008_auto_20220502_1435'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tool',
            name='Commands',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='securityApp.command'),
        ),
        migrations.DeleteModel(
            name='CommandList',
        ),
    ]
