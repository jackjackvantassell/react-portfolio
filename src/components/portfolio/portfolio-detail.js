import React, {Component} from "react"
import axios from "axios"

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItem: {}
        }
    }

    getPortfolioItem() {
        axios.get(`https://jack.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, 
        { withCredentials: true})
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        }).catch(error => {
            console.log("getPortfolioItem error", error);
        })
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    render () {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        return (
            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                    <img src={logo_url} />
                </div>

                <div className="portfolio-detail-description">
                    <div className="description" >
                        {description}
                    </div>
                </div>

                <div className="bottom-half" >
                    <a  href={url} className="link" target="_blank">
                        Visit {name}
                    </a>
                </div>

            </div>
        )
    }
}