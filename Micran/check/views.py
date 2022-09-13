from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import *


@api_view(['PUT'])
def assign_check(request,pk):

    try:
        whom = Control.objects.get(pk=pk)
        instance = Control.objects.get(pk=request.data['id'])
        print("Кому: ",whom.name,"Кто проверяет: ",instance.name)
    except:
        return Response({"error":"Not Found"},status=status.HTTP_404_NOT_FOUND)

    test_serializer = ControlSerilizer(data=request.data)

    if test_serializer.is_valid():
        instance.amount += 1
        instance.last_check = whom.name
        instance.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)