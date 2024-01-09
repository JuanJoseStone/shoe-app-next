import { useCallback, useEffect, useState } from "react";
import supabase from "@/app/supabase";

export const useModel = () => {
  const [models, setModels] = useState([]);
  const [modelsBackup, setModelsBackup] = useState([]);

  useEffect(() => {
    async function fetchModels() {
      let { data, error } = await supabase
        .from('models')
        .select(`id, name,
          categories (id, name),
          sizes_by_model (id, price,
            sizes (id, name, size)
          )
        `)

      setModels(data);
      setModelsBackup(data);
    }

    fetchModels()
  }, [])

  const filterModelsByCategory = (key) => {
    const newState = modelsBackup.filter((model) => model.categories.id === parseInt(key));
    setModels(newState);
  }

  const getSizesByModel = async({ idModel }) => {
    let { data, error } = await supabase
        .from('models')
        .select(`id, name,
          sizes_by_model (id, price,
            sizes (id, name, size)
          )
        `)
        .eq('id', idModel)
    return data
  }
  
  const getModelById = async({ idModel }) => {
    let { data, error } = await supabase
        .from('models')
        .select(`id, name,
          sizes_by_model (id, price,
            sizes (id, name, size)
          )
        `)
        .eq('id', idModel)
    return data
  }

  const createModel =  async({category_id, name, sizes}) => {
    const { data: model_data, error: model_error } = await supabase
    .from('models')
    .insert({ category_id, name })
    .select()

    const listSizes = [...sizes].map(size => {
      size.model_id = model_data[0].id
      size.price = parseFloat(size.price).toFixed(2)
      return size
    })

    const { data: size_data, error: size_error } = await supabase
    .from('sizes_by_model')
    .insert(listSizes)
    .select()

    if (model_error === null || size_error === null) {
      return true
    } else {
      return false
    }
  }

  return { models, filterModelsByCategory, getSizesByModel, getModelById, createModel };
}

// Quisiera dar de baja mi servicio de internet hogar.
// Frank lozano 
// 0800 11800

// 40 soles menos osea 29.90

// 59
// FBT-01097620-2023