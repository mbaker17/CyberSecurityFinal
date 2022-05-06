from django.contrib import admin
from .models import Type, Categories, Command, Tool

# Register your models here.
admin.site.register(Tool)
admin.site.register(Command)
admin.site.register(Type)
admin.site.register(Categories)