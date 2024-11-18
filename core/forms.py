# forms.py

from django import forms
from .models import DetallesContacto

class DetallesContactoForm(forms.ModelForm):
    class Meta:
        model = DetallesContacto
        fields = ['nombreCliente', 'telefono', 'correo_electronico', 'consulta']
