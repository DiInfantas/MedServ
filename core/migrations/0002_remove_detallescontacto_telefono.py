# Generated by Django 5.0.2 on 2024-11-18 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detallescontacto',
            name='telefono',
        ),
    ]
