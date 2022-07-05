import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [loadingScript, setLoadingscript] = useState(null);
  const [products, setProducts] = useState([]);
  console.log("use fetch");
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
    setLoadingscript((loadingScript) => {
      return loadingScript == null || false ? true : false;
    });
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products, loadingScript, setLoadingscript };
};
