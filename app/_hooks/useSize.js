import { useEffect, useState } from "react";
import supabase from "@/app/supabase";

export const useSize = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    async function fetchSizes() {
      let { data, error } = await supabase
        .from('sizes')
        .select('*')

      setSizes(data);
    }

    fetchSizes()
  }, [])
 
  return { sizes };
}
