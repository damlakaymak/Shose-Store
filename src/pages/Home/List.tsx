import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { Shose } from "../../types";
import Loader from "../../componants/Header/Loader";
import Error from "../../componants/Header/Error";
import Card from "../../componants/Card";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../utils/formatParams";

const List = () => {
  const [params, setParams] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());

  const paramStr = formatParams(paramsObj) || null;

  const { isLoading, error, data } = useQuery< Shose[]>({
    queryKey: ["shoes", paramStr],
    queryFn: () =>
      api
        .get(paramStr ? "/shoes?" + paramStr : "/shoes")
        .then((res) => res.data),
  });

  return (
    <div className="col-span-4 lg:col-span-3 ">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error.message} />
      ) : data ? (
        data.length === 0 ? (
          <p>
            No products were found that met the criteria you were looking for <br /> try again please
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
            {data.map((item) => (
              <Card key={item.id} item={item} />
  )          )}
          </div>
        )
      ) : (
        <p className="text-center">Aranılan kriterlere uygun ürün bulunamadı</p>
      )}
    </div>
  );
};

export default List;
