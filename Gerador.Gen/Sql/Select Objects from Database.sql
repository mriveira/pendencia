Select * from sysObjects where xtype = 'u' order by 1

SELECT name
FROM   sys.procedures
WHERE  Object_definition(object_id) LIKE '%ColaboradorEscolaRemuneracao%'