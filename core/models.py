from django.db import models

# Create your models here.

class DetallesContacto(models.Model):
    nombreCliente = models.CharField(max_length=100)
    telefono = models.CharField(max_length=9) 
    correo_electronico = models.EmailField()
    consulta = models.CharField(max_length=300)

    def __str__(self):
        return  "Consulta de: " + self.nombreCliente + "| Telefono: " + self.telefono + "| Correo: " + self.correo_electronico