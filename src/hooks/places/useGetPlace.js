import { useEffect, useState } from "react";
import { getData } from "../../helpers/fetchData";

export default function useGetPlace(id) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [result, setResult] = useState();

  function getPlace() {
    setLoading(true);
    getData({ endpoint: `/api/v1/places/${id}` })
      .then((place) => {
        setResult(place);
      })
      .catch((err) => setErr(JSON.stringify(err)))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getPlace();
  }, []);

  return { err, loading, result };
}
