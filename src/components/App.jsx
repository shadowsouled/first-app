import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

class App extends React.Component {
    state = { products: [] };

    onSearchSubmit = async (term) => {
        // const response = await unsplash.get("/search/photos", {
        //     params: { query: term },
        // });
        // this.setState({ images: response.data.results });
        if (term === "") {
            return;
        }
        let khw = [];
        let x = Object.keys(this.state.products);
        for (let element in x) {
            //console.log(x);
            if (this.state.products[element][0]["title"].indexOf(term) !== -1) {
                khw.push([
                    {
                        category: this.state.products[element][0]["category"],
                        description:
                            this.state.products[element][0]["description"],
                        id: this.state.products[element][0]["id"],
                        image: this.state.products[element][0]["image"],
                        price: this.state.products[element][0]["price"],
                        title: this.state.products[element][0]["title"],
                    },
                ]);
            }
        }
        this.setState({ products: khw });
    };

    componentDidMount = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const wtf = await response.json();
        //console.log(wtf["2"]);
        let x = Object.keys(wtf);
        let khw = [];
        for (let pro in x) {
            //console.log("wtf", wtf[pro]["id"]);
            khw.push([
                {
                    category: wtf[pro]["category"],
                    description: wtf[pro]["description"],
                    id: wtf[pro]["id"],
                    image: wtf[pro]["image"],
                    price: wtf[pro]["price"],
                    title: wtf[pro]["title"],
                },
            ]);
        }
        this.setState({ products: khw });
    };

    render() {
        //console.log(this.state.products);
        const prl = this.state.products.map((stt) => {
            //console.log(stt, "stt");
            return <ProductCard key={stt[0].id} data={stt[0]} />;
        });
        //console.log(prl);
        return (
            <div className="">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="product-list" style={{ marginTop: "10px" }}>
                    {prl}
                </div>
            </div>
        );
    }
}

export default App;
