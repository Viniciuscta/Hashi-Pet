import './Home.css'

function home() {
    return(<>
    <section className="welcome">
    <div className="feacture_enterprise">
        <h2>Olá, somos da Hachi pet</h2>

        <p>Cada um dos nossos produtos é especialmente pensado para o melhor dos nossos amaveis companheiros </p>
    </div>
    </section>
    <section className='featured_home welcome'>
        <div className='featured_container'>
            <h2>Nossos Produtos:</h2>
            <div className="featured_products">  
                    <div className='container_cards'>
                        <div class="container-item">
                            <div class="wrapper">
                                <div class="banner-image"> </div>
                                <h1> Toyota Supra</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>
                                    consectetur adipiscing elit.</p>
                            </div>
                            <div class="button-wrapper"> 
                                <button class="btn outline">DETAILS</button>
                                <button class="btn fill">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className='container_cards'>
                        <div class="container-item">
                            <div class="wrapper">
                                <div class="banner-image"> </div>
                                <h1> Toyota Supra</h1>
                                <p>Lorem ipsum dolor sit amet, <br/>
                                    consectetur adipiscing elit.</p>
                            </div>
                            <div class="button-wrapper"> 
                                <button class="btn outline">DETAILS</button>
                                <button class="btn fill">BUY NOW</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    </>)
}
export default home