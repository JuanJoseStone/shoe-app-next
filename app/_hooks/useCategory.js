import { useEffect, useState } from "react";
import supabase from "@/app/supabase";

export const useCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      let { data, error } = await supabase
        .from('categories')
        .select('*')

      setCategories(data);
    }

    fetchCategories()
  }, [])
 
  return { categories };
}