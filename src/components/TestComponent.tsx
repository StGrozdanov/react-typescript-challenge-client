import { useEffect } from "react";
import { outdoorsyAPI } from "../services/outdoorsyService";

const TestComponent: React.FC = () => {
    useEffect(() => {
        outdoorsyAPI.searchByKeyword('vans').then((response) => console.log(response));
    }, []);

    return (
        <h1>Test</h1>
    );
}

export default TestComponent;