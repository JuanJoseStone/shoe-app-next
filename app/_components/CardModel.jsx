import { Button, Card, CardBody, Link, CardHeader, Divider, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { EditIcon, ListIcon } from "../_utils/Icons";

export default function CardModel({ models, handleEditModel }) {
  return (
    <>
    {
      models.map((model, index) => (
        <Card className="bg-gray-300 dark:bg-gray-800" key={index}>
          <CardHeader className="flex gap-3 justify-between pb-2">
            <p className="text-md text-gray-600 dark:text-white uppercase font-bold">{ model.name }</p>
            <div className="flex gap-2">
              { model.sizes_by_model.length === 0
                ? <Popover placement="right">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" color="default" variant="faded" aria-label="Take a photo">
                    <ListIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Aviso</div>
                    <div className="text-tiny">Antes de poder agregar docenas a partir de este modelo,</div>
                    <div className="text-tiny">es necesario que este modelo tenga asignado como minimo una talla</div>
                  </div>
                </PopoverContent>
              </Popover>
              :
              <Button isIconOnly size="sm" color="success" variant="flat" aria-label="Take a photo" href={`/listado-de-docenas-por-modelo/${model.id}`} as={Link}>
                <ListIcon />
              </Button>
              }
              <Button isIconOnly size="sm" color="warning" variant="flat" aria-label="Take a photo" onClick={() => handleEditModel(model.id)}>
                <EditIcon />
              </Button>
            </div>
          </CardHeader>

          <Divider className="bg-gray-400 dark:bg-gray-600 mx-auto w-11/12"/>
          <CardBody className="pt-2">
            <div className="flex justify-between items-center w-full text-sm mb-1">
              <span className="text-gray-600 font-bold dark:text-gray-200">#Tallas</span>
              <span className="text-gray-600 font-bold dark:text-gray-200">Precio</span>
            </div>
            {
              model?.sizes_by_model.map((size, index) => (
                <div className="flex justify-between items-center w-full" key={index}>
                  <small className="text-gray-700 dark:text-gray-300 uppercase">{size.sizes.name} <em className="text-xs dark:text-gray-400 font-light">({size.sizes.size})</em></small>
                  <small className="text-gray-700 dark:text-gray-300">S/ {size.price}</small>
                </div>
              ))
            }
          </CardBody>
        </Card>
      ))
    }
    </>
  )
}