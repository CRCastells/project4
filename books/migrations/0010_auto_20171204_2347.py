# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 23:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0009_auto_20171204_2215'),
    ]

    operations = [
        migrations.AlterField(
            model_name='link',
            name='title',
            field=models.CharField(max_length=120),
        ),
    ]
