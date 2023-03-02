import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT     vta_det.id_venta_cabecera, clte.identificacion, tipo_documento.Detalle AS tipo_documento, { fn CONCAT(clte.nombre1, { fn CONCAT(' ', { fn CONCAT(clte.nombre2, { fn CONCAT(' ', { fn CONCAT(clte.apellido1, { fn CONCAT(' ', 
clte.apellido2) }) }) }) }) }) } AS nombre_completo, CONVERT(date, clte.fecha_nacimiento) AS fecha_nacimiento, vta_cab.num_solicitud, distribuidor.Detalle AS distribuidor, vta_det.num_portar, 
operadora_port.Detalle AS operadora_donante, vta_det.num_nip, clte.celular1, clte.celular2, clte.email AS correo, prov.Detalle AS provincia, ciudad.Detalle AS ciudad, clte.parroquia, { fn CONCAT(clte.dir_domicilio_ciudadela, 
{ fn CONCAT(' / ', { fn CONCAT(clte.dir_domicilio_calle1, { fn CONCAT(' / ', { fn CONCAT(clte.dir_domicilio_calle2, { fn CONCAT(' / ', { fn CONCAT(clte.dir_domicilio_villa, { fn CONCAT(' / ', clte.dir_dom_referencia) }) }) }) }) }) }) }) 
} AS direccion_domicilio, tipo_pago.Detalle AS forma_pago, ISNULL(bancos.EntidadNombre, 'Contra Factura') AS entidad_bancaria, vta_cab.tipo_cta, est.Detalle AS estado_venta, sub_est.Detalle AS sub_estado_venta, 
observacion.Detalle AS observacion, vta_cab.carpeta_aprobada, vta_cab.carpeta_regularizada, vta_cab.fecha_ingreso, periodo.Detalle AS periodo, ciclo.Detalle AS ciclo_pago, vta_cab.fecha_operativa, 
CASE WHEN distribuidor.Detalle LIKE 'Ecuaconexion 60-100' THEN vta_det.tarifa_basica / 2 ELSE vta_det.tarifa_basica END AS tarifa_basica, vta_det.tarifa_venta, serv.numServicios AS cant_servicios, 
{ fn CONCAT(usuarios.nombre1, { fn CONCAT(' ', { fn CONCAT(usuarios.nombre2, { fn CONCAT(' ', { fn CONCAT(usuarios.apellido1, { fn CONCAT(' ', usuarios.apellido2) }) }) }) }) }) } AS asesor, 
usuarios.identificacion AS identificacion_asesor, perfiles.DescripcionRol AS perfil_asesor, { fn CONCAT(superv.nombre1, { fn CONCAT(' ', { fn CONCAT(superv.nombre2, { fn CONCAT(' ', { fn CONCAT(superv.apellido1, 
{ fn CONCAT(' ', superv.apellido2) }) }) }) }) }) } AS supervisor, serv.IdCodigo AS id_producto_servicio, serv.detalle_nivel5 AS serv_nivel5, serv.detalle_nivel4 AS serv_nivel4, serv.detalle_nivel3 AS serv_nivel3, 
serv.detalle_nivel2 AS serv_nivel2, serv.detalle_nivel1 AS serv_nivel1, serv.detalle_nivel0 AS serv_nivel0
FROM            Venta.Venta_Detalle AS vta_det LEFT OUTER JOIN
Venta.Venta_Cabecera AS vta_cab ON vta_det.id_venta_cabecera = vta_cab.id_venta_cabecera LEFT OUTER JOIN
Cliente.Cli_Clientes AS clte ON vta_cab.id_cliente = clte.id_cliente LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle
      WHERE        (IdTabla LIKE '6')) AS prov ON prov.IdCodigo = clte.id_provincia LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_10
      WHERE        (IdTabla LIKE '7')) AS ciudad ON ciudad.IdCodigo = clte.id_ciudad LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_9
      WHERE        (IdTabla LIKE '23')) AS est ON est.IdCodigo = vta_cab.id_estado LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_8
      WHERE        (IdTabla LIKE '24')) AS sub_est ON sub_est.IdCodigo = vta_cab.id_subestado LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_7
      WHERE        (IdTabla LIKE '5')) AS tipo_pago ON tipo_pago.IdCodigo = vta_cab.id_tipo_pago LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_6
      WHERE        (IdTabla LIKE '2')) AS tipo_documento ON tipo_documento.IdCodigo = clte.id_tipo_identificacion LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_5
      WHERE        (IdTabla LIKE '26')) AS operadora_port ON vta_det.num_portar_operadora = operadora_port.IdCodigo LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_4
      WHERE        (IdTabla LIKE '30')) AS periodo ON vta_cab.id_periodo = periodo.IdCodigo LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_3
      WHERE        (IdTabla LIKE '27')) AS ciclo ON vta_cab.dia_pago = ciclo.IdCodigo LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_2
      WHERE        (IdTabla LIKE '28')) AS distribuidor ON vta_cab.id_distribuidor_servicio = distribuidor.IdCodigo LEFT OUTER JOIN
    (SELECT        IdTabla, IdCodigo, Detalle, Tipo, Estado, DescAlterno, DescAlternoString, DescAlternoInt, DescAlternoDec
      FROM            Catalogo.Cat_Catalogo_Detalle AS Cat_Catalogo_Detalle_1
      WHERE        (IdTabla LIKE '25')) AS observacion ON vta_cab.id_rechazo = observacion.IdCodigo LEFT OUTER JOIN
Seguridad.Seg_Usuario AS usuarios ON vta_cab.id_user_ingreso = usuarios.id_user LEFT OUTER JOIN
Seguridad.Seg_Usuario AS superv ON usuarios.id_jefe = superv.id_user LEFT OUTER JOIN
    (SELECT DISTINCT idCodigo, EntidadNombre
      FROM            Entidad.Ent_Entidades
      WHERE        (estado LIKE 'A')) AS bancos ON vta_cab.id_entidad_bancaria = bancos.idCodigo LEFT OUTER JOIN
dbo.arbol_general_servicios AS serv ON vta_det.id_producto_servicio = serv.IdCodigo LEFT OUTER JOIN
Seguridad.Seg_Rol AS perfiles ON usuarios.id_perfil = perfiles.idRol;`,
})
export class ResumenVentasGeneral {
  @ViewColumn({ name: "id_venta_cabecera" })
  idVentaCabecera: number;

  @ViewColumn({ name: "nombre_completo" })
  cliente: string;

  @ViewColumn({ name: "asesor" })
  asesor: string;
}
