"use client"
import { useState } from "react";
import {Button, Card, CardBody, CardHeader, Input, Tab, Tabs, Tooltip, useDisclosure} from "@nextui-org/react";
import { useCategory } from "@/app/_hooks/useCategory";
import { useModel } from "@/app/_hooks/useModel";
import { useDevice } from "@/app/_hooks/useDevice";
import CardModel from "@/app/_components/CardModel";
import { PlusIcon, MinusIcon } from "@/app/_utils/Icons";
import ModalLayout from "@/app/_components/modals/ModalLayout";
import { useSize } from "@/app/_hooks/useSize";

export default function Categories() {
  const { categories } = useCategory();
  const { models, filterModelsByCategory, getModelById, createModel } = useModel();
  const { sizes } = useSize();
  const { isMobile } = useDevice();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [inputFields, setInputFields] = useState([{ size_id: '', price: '' }])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [nameModel, setNameModel] = useState('')
  const [idCategory, setIdCategory] = useState('')

  const handleNewModel = (idCategory) => {
    console.log(idCategory);
    setIdCategory(idCategory)
    onOpen()
  }

  const handleEditModel = async (id) => {
    console.log(id)
    const res = await getModelById({idModel: id})
    console.log(res)
    onOpen()
  }

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);

    if (event.target.name === 'size_id' && !selectedSizes.includes(event.target.value)) {
      setSelectedSizes([...selectedSizes, event.target.value])
    }
  }
  
  const addFields = () => {
    if (inputFields.length < sizes.length) {
      let newfield = { size_id: '', price: '' }
      setInputFields([...inputFields, newfield])
    }
  }

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)

    setSelectedSizes([...data.map(field => field.size_id)]) 
  }

  const createNewModel = async(e) => {
    e.preventDefault()

    const result  = await createModel({category_id:idCategory, name:nameModel, sizes:inputFields})

    if (result) {
      onClose()
    }
  }

  return (
    <>
      {
        models.length <= 0
        ? <p>cargando</p>
        :
        (
        <>
        <main className="flex justify-center min-h-screen p-3 md:p-6 gap-6 w-full">
          <div className="max-w-[1024px] md:px-6 w-full">
            <Tabs color="warning" aria-label="Tabs colors" radius="full" variant="solid" fullWidth={isMobile} onSelectionChange={filterModelsByCategory}>
              {
                categories.map((category) => (
                  <Tab key={category.id} title={category.name} className="capitalize">
                    <Card>
                      <CardHeader className="pb-00">
                        <Button size="sm" color="success" className="text-white" startContent={<PlusIcon />} onClick={() => handleNewModel(category.id)}>
                          Nuevo modelo
                        </Button>
                      </CardHeader>
                      <CardBody className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-5">
                        <CardModel models={models} handleEditModel={handleEditModel}/>
                      </CardBody>
                    </Card>  
                  </Tab>
                ))
              }
            </Tabs>
          </div>
        </main>

        {isOpen ? (
          <ModalLayout
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            warningMessage='Registrar un nuevo modelo'
          >
            <form onSubmit={createNewModel}>
              <div className="pb-3">
                <label htmlFor="name">Nombre del modelo *</label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="off"
                  autoFocus
                  variant="bordered"
                  description="Ejem. (M10, TOMY5, N100 ...)"
                  labelPlacement="outside"
                  value={nameModel}
                  onChange={e => setNameModel(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center pb-3">
                <h4>Puede agregar mas Tallas</h4>
                <Tooltip content="Agregar mas filas">
                  <Button isIconOnly color="success" variant="flat" size="sm" onClick={addFields}>
                    <PlusIcon />
                  </Button>
                </Tooltip>
              </div>

              <div className="grid grid-cols-2 items-center">
                <span className="text-default-500">Talla</span>
                <span className="text-default-500 -ml-3">Precio</span>
              </div>

              {inputFields.map((input, index) => (
                <div key={index} className="flex items-center gap-2 py-1">
                  <select
                    name="size_id"
                    className="relative uppercase text-xs w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-foreground h-unit-10 min-h-unit-10 rounded-medium transition-background !duration-150 transition-colors motion-reduce:transition-none"
                    value={input.size_id}
                    onChange={event => handleFormChange(index, event)}
                  >
                    <option value="" disabled>Seleccionar</option>
                    {sizes.map((size) => (
                      <option key={size.id} value={size.id}>{size.name} ({size.size})</option>
                    ))}
                  </select>
                  <Input
                    name="price"
                    type="number"
                    variant="bordered"
                    labelPlacement="outside"
                    autoComplete="off"
                    placeholder="ejem. 75.00 o 75"
                    value={input.price}
                    onChange={event => handleFormChange(index, event)}
                  />
                  {
                    inputFields.length > 1
                    ?
                    <Tooltip content="Eliminar fila">
                      <Button isIconOnly color="danger" variant="flat" size="sm"  onClick={() => removeFields(index)}>
                        <MinusIcon />
                      </Button>
                    </Tooltip>
                    :
                    null
                  }
                </div>
              ))}

              <div className="flex justify-end items-center gap-2 py-3">
                <Button color="default" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="success" className="text-white" type="submit">
                  Registrar
                </Button>
              </div>
            </form>
          </ModalLayout>
        ) : null}
        </>
        )
      }
    </>
  );
}
