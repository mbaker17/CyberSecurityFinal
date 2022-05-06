from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from securityApp.models import Tool, Type, Categories, Command
from securityApp.serializers import ToolSerializer, TypeSerializer, CategoriesSerializer, CommandsSerializer

# Create your views here.
@csrf_exempt
def CategoryApi(request, id=0):
    if request.method=='GET':
        categories = Categories.objects.all()
        categories_serializer = CategoriesSerializer(categories, many=True)
        return JsonResponse(categories_serializer.data, safe=False)

    elif request.method=='POST':
        category_data = JSONParser().parse(request)
        categories_serializer = CategoriesSerializer(data=category_data)
        if categories_serializer.is_valid():
            categories_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add", safe=False)

    elif request.method=='PUT':
        category_data = JSONParser().parse(request)
        category = Categories.objects.get(CategoryId=category_data['CategoryId'])
        category_serializer = CategoriesSerializer(category, data=category_data)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse("Updated Successfilly!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method=='DELETE':
        category = Categories.objects.get(CategoryId=id)
        category.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def TypeApi(request, id=0):
    if request.method=='GET':
        types = Type.objects.all()
        types_serializer = TypeSerializer(types, many=True)
        return JsonResponse(types_serializer.data, safe=False)

    elif request.method=='POST':
        type_data = JSONParser().parse(request)
        types_serializer = TypeSerializer(data=type_data)
        if types_serializer.is_valid():
            types_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add", safe=False)

    elif request.method=='PUT':
        type_data = JSONParser().parse(request)
        type = Type.objects.get(TypeId=type_data['TypeId'])
        types_serializer = TypeSerializer(type, data=type_data)
        if types_serializer.is_valid():
            types_serializer.save()
            return JsonResponse("Updated Successfilly!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method=='DELETE':
        type = Type.objects.get(TypeId=id)
        type.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def ToolApi(request, id=0):
    if request.method=='GET':
        tools = Tool.objects.all()
        tools_serializer = ToolSerializer(tools, many=True)
        return JsonResponse(tools_serializer.data, safe=False)

    elif request.method=='POST':
        tool_data = JSONParser().parse(request)
        tools_serializer = ToolSerializer(data=tool_data)
        if tools_serializer.is_valid():
            tools_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add", safe=False)

    elif request.method=='PUT':
        tool_data = JSONParser().parse(request)
        tool = Tool.objects.get(ToolId=tool_data['ToolId'])
        tools_serializer = ToolSerializer(tool, data=tool_data)
        if tools_serializer.is_valid():
            tools_serializer.save()
            return JsonResponse("Updated Successfilly!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method=='DELETE':
        tool = Tool.objects.get(ToolId=id)
        tool.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def CommandApi(request, id=0):
    if request.method=='GET':
        commands = Command.objects.all()
        commands_serializer = CommandsSerializer(commands, many=True)
        return JsonResponse(commands_serializer.data, safe=False)

    elif request.method=='POST':
        commands_data = JSONParser().parse(request)
        commands_serializer = CommandsSerializer(data=commands_data)
        if commands_serializer.is_valid():
            commands_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add", safe=False)

    elif request.method=='PUT':
        commands_data = JSONParser().parse(request)
        commands = Command.objects.get(id=commands_data['id'])
        commands_serializer = CommandsSerializer(commands, data=commands_data)
        if commands_serializer.is_valid():
            commands_serializer.save()
            return JsonResponse("Updated Successfilly!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method=='DELETE':
        commands = Command.objects.get(id=id)
        commands.delete()
        return JsonResponse("Deleted Successfully", safe=False)