import React, { useState } from "react";
import { ContainerCard, Section, Price, Marca, Modelo, DivInfo, Info, DivButton } from "./Styles"
import Button from "../Button/Button";
import Image from "../Image/Image";
import Slider from "../Slider/Slider";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Card = ({ car, cardView }) => {
    const [moreBtn, setMoreBtn] = useState(false);
    const [openPictures, setOpenPictures] = useState(false);
    const toggleMore = (state) => {
        !state ? setMoreBtn(true) : setMoreBtn(false);
    }
    const toggleOpenPictures = (state) => {
        !state ? setOpenPictures(true) : setOpenPictures(false);
    }
    return (
        <ContainerCard cardView={cardView} >
            <Button cardView={cardView} typeBtn="more" content={!moreBtn ? (<i className="bi bi-plus-circle-fill"></i>) : (<i className="bi bi-dash-circle-fill"></i>)} aria-label="Botão para ver mais informações" onClick={() => toggleMore(moreBtn)} />
            <Button typeBtn="more picture" content={!openPictures ? (<i className="bi bi-images"></i>) : (<i className="bi bi-x-octagon-fill"></i>)} aria-label="Botão para ver mais informações" onClick={() => toggleOpenPictures(openPictures)} />
            <Section className="img-infos" cardView={cardView}>
                <Section className="img" cardView={cardView}>
                    <Image typeImg="card" src={car.veiculo_foto[0]} alt={`Imagem de veículo ${car.veiculo_marca} ${car.modelo_nome_pai}`} />
                    <Price>{parseFloat(car.veiculo_valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Price>
                </Section>
                <Section className="info-cars" cardView={cardView}>
                    <Marca>{car.veiculo_marca} {car.modelo_nome_pai}</Marca>
                    <Modelo>{car.veiculo_modelo}</Modelo>
                    <Section className="description">
                        <DivInfo>
                            <Info>{car.veiculo_km}km</Info>
                        </DivInfo>
                        <DivInfo>
                            <Info>{car.veiculo_cambio}</Info>
                        </DivInfo>
                        <DivInfo>
                            <Info>{car.ano_fabricacao}/{car.ano_modelo}</Info>
                        </DivInfo>
                        <DivInfo>
                            <Info>{car.veiculo_combustivel}</Info>
                        </DivInfo>
                    </Section>
                    <DivButton>
                        <Button typeBtn="contact" content="Entrar em contato" aria-label="Botão para entrar em contato com vendedor" />
                        <Button typeBtn="finan" content="Simular financiamento" aria-label="Botão para simular financiamento" />
                    </DivButton>
                </Section>
                <Section className="acessorios" cardView={cardView}>
                    <h4>Acessórios</h4>
                    <div>
                        {!car.acessorios_nomes ? (<p>Acessórios não informados</p>) : (<p>{car.acessorios_nomes}</p>)}
                    </div>
                </Section>
            </Section>
            <Section className="acessorios-fullcard" cardView={cardView} moreBtn={moreBtn}>
                <h4>Acessórios</h4>
                <div>
                    {!car.acessorios_nomes ? (<p>Acessórios não informados</p>) : (<p>{car.acessorios_nomes}</p>)}
                </div>
            </Section>
            <Section className="pictures-fullcard" openPictures={openPictures}>
                <Slider data={car.veiculo_foto} cardView={cardView}/>
            </Section>
            <Section className="city-like" cardView={cardView}>
                <Section className="city">
                    <i className="bi bi-geo-alt" aria-label="Localização"></i>
                    <p>{car.cidade_nome}</p>
                </Section>
                <i className="bi bi-heart" aria-label="Adicionar aos favoritos"></i>
            </Section>
        </ContainerCard>
    )
}
export default Card;