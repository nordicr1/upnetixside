import React from "react";

const Tutoriais = () => {
  return (
    
    
    <div className="box-olt-all">
      <header className="box-header">
        <h1 className="text">TUTORIAIS PAGE</h1>
      </header>

        <div className="box-olt">
                <div className="box-h2">
                    <h2>IP DAS OLT's</h2>
                </div>
            <div className="box-olt-text">
                <p>192.168.38.150 OLT - POP PETRÓPOLIS CONCENTRADOR 8820i</p>
                <p>192.168.38.120 OLT - POP DOM PEDRO CONCENTRADOR 8820i </p>
                <p>192.168.38.130 OLT - POP SOBERANE CONCENTRADOR 8820i</p>
                <p>192.168.38.245 OLT - POP SUMAÚMA CONCENTRADOR 4840e</p>
                <p>192.168.38.247 OLT - POP LARANJEIRAS CONCENTRADOR 4840e</p>
                <p>192.168.36.198 OLT - POP VIA NORTE CONCENTRADOR G16</p>
            </div>
        </div>

            <div className="box-olt">
                <div className="box-h2">
                    <h2>PROVISIONAMENTO OLT 8820i</h2>
                </div>

                <div className="box-olt-text">
                    <p>- onu show</p>
                    <p>- onu set gpon xx onu xx id xx meprof intelbras-121ac</p>
                    <p>- bridge add gpon XX onu XX downlink vlan 500 tagged</p>
                    <p>- cpe-mgr add local gpon xx onu xx</p>
                    <p>- cpe-mgr show local gpon xx onu xx</p>
                </div>
            </div>

            <div className="box-olt">
                <div className="box-h2">
                    <h2> VERIFICAR SE O EQUIPAMENTO ESTÁ ONLINE</h2>
                </div>

                <div className="box-olt-text">
                    <p>- onu status gpon xx onu xx</p>
                    
                    
                </div>
            </div>
      
    </div>
  );
};

export default Tutoriais;
