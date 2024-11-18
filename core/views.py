# views.py

from django.shortcuts import render
from django.http import JsonResponse
from .models import DetallesContacto

def home(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombreCliente', '')
        correo = request.POST.get('correo_electronico', '')
        telefono = request.POST.get('telefono', '')
        consulta = request.POST.get('consulta', '')

        # Guardar en la base de datos
        DetallesContacto.objects.create(nombreCliente=nombre, correo_electronico=correo, telefono=telefono, consulta=consulta)

        # Devolver un JSON con el mensaje de éxito
        return JsonResponse({'mensaje': '¡Tu consulta se ha enviado con éxito! Un ejecutivo se contactará con usted a la brevedad '})

    return render(request, 'core/index.html')
