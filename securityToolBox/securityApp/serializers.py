from rest_framework import serializers
from .models import Tool, Categories, Type, Command

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('CategoryId',
                  'CategoryName')

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('TypeId',
                  'TypeName')

class CommandsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Command
        fields = ('id',
                  'CommandText',
                  'CommandNotes',
                  'ToolKey')

class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = ('ToolId',
                  'ToolName',
                  'Category',
                  'ToolNotes',
                  'ToolLink')

                  