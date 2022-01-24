<?


$compartilhar = "";


if ( $paginaAtual == 'Logotipo' ) {    
    
    $logotipoTitulo_01 = "Pack Geral";
    $logotipoLink_01 = $download. "logo/AF_Merce_Assets_Logo.zip";
    $logotipoTexto_01 = "AF_Merce_Assets_Logo.zip";
    
    $logotipoTitulo_02 = "Customização";
    $logotipoLink_02 = $download. "logo/AF_Merce_Customizacao_Logo.zip";
    $logotipoTexto_02 = "AF_Merce_Customizacao_Logo.zip";
    
    $logotipoTitulo_03 = "Versões de logo";
    $logotipoLink_03 = $download. "logo/AF_Merce_Versoes_Logo.zip";
    $logotipoTexto_03 = "AF_Merce_Versoes_Logo.zip";
    
    $logotipoTitulo_04 = "Ícone";
    $logotipoLink_04 = $download. "logo/AF_Merce_Versoes_Icone.zip";
    $logotipoTexto_04 = "AF_Merce_Versoes_Icone.zip";

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>

                <p class="txt--padrao40 txt--bold">Download</p>
                
                <div class="grid--2colunas">
                    <div class="esq">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_01.'</p>
                            <a href="'.$logotipoLink_01.'">'.$logotipoTexto_01.'</a>
                        </div>
                    
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_02.'</p>
                            <a href="'.$logotipoLink_02.'">'.$logotipoTexto_02.'</a>
                        </div>
                    </div>
                
                    <div class="dir">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_03.'</p>
                            <a href="'.$logotipoLink_03.'">'.$logotipoTexto_03.'</a>
                        </div>
            
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_04.'</p>
                            <a href="'.$logotipoLink_04.'">'.$logotipoTexto_04.'</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    ';
}


if ( $paginaAtual == 'Paleta' ) {
    
    $logotipoTitulo_01 = "";
    $logotipoLink_01 = $download. "cores/AF_Merce_Cores.zip";
    $logotipoTexto_01 = "AF_Merce_Cores.zip";

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>

                <p class="txt--padrao40 txt--bold">Download</p>
                
                <div class="grid--2colunas">
                    <div class="esq">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_01.'</p>
                            <a href="'.$logotipoLink_01.'">'.$logotipoTexto_01.'</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    ';
}


if ( $paginaAtual == 'Tipografia' ) {
    
    $logotipoTitulo_01 = "";
    $logotipoLink_01 = $download. "";
    $logotipoTexto_01 = "";

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>
            </article>
        </section>
    ';
}


if ( $paginaAtual == 'Essencia' ) {
    
    $logotipoTitulo_01 = "Essência Mercê";
    $logotipoLink_01 = $download. "essencia/AF_Merce_Essencia.zip";
    $logotipoTexto_01 = "AF_Merce_Essencia.zip";
    
    $logotipoTitulo_02 = "Manifesto";
    $logotipoLink_02 = $download. "essencia/AF_Merce_Manifesto.zip";
    $logotipoTexto_02 = "AF_Merce_Manifesto.zip";   

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>

                <p class="txt--padrao40 txt--bold">Download</p>
                
                <div class="grid--2colunas">
                    <div class="esq">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_01.'</p>
                            <a href="'.$logotipoLink_01.'">'.$logotipoTexto_01.'</a>
                        </div>
                    </div>
                
                    <div class="dir">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_02.'</p>
                            <a href="'.$logotipoLink_02.'">'.$logotipoTexto_02.'</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    ';
}


if ( $paginaAtual == 'Grafismos' ) {
    
    $logotipoTitulo_01 = "";
    $logotipoLink_01 = $download. "grafismos/AF_Merce_Grafismos.zip";
    $logotipoTexto_01 = "AF_Merce_Grafismos.zip";

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>

                <p class="txt--padrao40 txt--bold">Download</p>
                
                <div class="grid--2colunas">
                    <div class="esq">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_01.'</p>
                            <a href="'.$logotipoLink_01.'">'.$logotipoTexto_01.'</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    ';
}


if ( $paginaAtual == 'Pictografia' ) {
    
    $logotipoTitulo_01 = "";
    $logotipoLink_01 = $download. "pictografia/AF_Merce_Pictos.zip";
    $logotipoTexto_01 = "AF_Merce_Pictos.zip";

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>

                <p class="txt--padrao40 txt--bold">Download</p>
                
                <div class="grid--2colunas">
                    <div class="esq">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_01.'</p>
                            <a href="'.$logotipoLink_01.'">'.$logotipoTexto_01.'</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    ';
}

if ( $paginaAtual == 'Estilo fotográfico' ) {
    
    $logotipoTitulo_01 = "Clique aqui pra acessar nossas fotos";
    $logotipoLink_01 = "https://drive.google.com/drive/folders/14eQjuEHHPK272gMqY0g7nrQm0HgpFdti";
    $logotipoTexto_01 = "Clique aqui pra acessar nossas fotos";

    echo'
        <section id="download">
            <article> 
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>              

                <p class="txt--padrao40 txt--bold">Download</p>
                
                <div class="grid--2colunas">
                    <div class="esq">
                        <div>
                            
                            <a href="'.$logotipoLink_01.'">'.$logotipoTexto_01.'</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    ';
}

if ( $paginaAtual == 'Aplicações' ) {
    
    $logotipoTitulo_01 = "";
    $logotipoLink_01 = $download. "aplicacoes/AF_Merce_Enxoval.zip";
    $logotipoTexto_01 = "AF_Merce_Enxoval.zip";

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>

                <p class="txt--padrao40 txt--bold">Download</p>
                
                <div class="grid--2colunas">
                    <div class="esq">
                        <div>
                            <p class="txt--padrao20">'.$logotipoTitulo_01.'</p>
                            <a href="'.$logotipoLink_01.'">'.$logotipoTexto_01.'</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    ';
}


if ( $paginaAtual == 'Identidade' ) {
    
    $logotipoTitulo_01 = "";
    $logotipoLink_01 = $download. "";
    $logotipoTexto_01 = "";

    echo'
        <section id="download">
            <article>
                <div class="compartilhar desktopitem">
                    <a href=" '.$compartilhar.' " class="share">
                        <p>Compartilhar sessão</p>
                    </a>
                </div>
            </article>
        </section>
    ';
}


?>




