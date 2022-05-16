function FeaturesData(props){
    return(
        <div className="box">
            <div className="boxes">
                <div className="header">
                      {props.name}
                </div>
                <div className="content">
                    {props.data}
                </div>
            </div>
        </div>
    );
}
export default FeaturesData;
