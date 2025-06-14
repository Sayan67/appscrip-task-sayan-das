import { useEffect, useState } from "react";
import { fetchAllProducts } from "@/services/fetchProduct";

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { products, loading, error };
}
