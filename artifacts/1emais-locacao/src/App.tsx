import { useEffect, useState } from 'react';
import videos from './data/videos.json';
import {
  ArrowRight,
  Armchair,
  BadgeCheck,
  Banknote,
  BellRing,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Package,
  PackageCheck,
  PartyPopper,
  Send,
  Shirt,
  ShieldCheck,
  Smartphone,
  Tractor,
  Truck,
  Wallet,
  Warehouse,
  Wrench,
} from 'lucide-react';

type ProductSystem = 'locacao' | 'pos_vendas';

const TRIAL_URL =
  'https://wa.me/5517988173773?text=Ol%C3%A1%2C%20quero%20testar%20gr%C3%A1tis%20o%20sistema%20de%20loca%C3%A7%C3%A3o%20por%207%20dias';
const POST_SALES_TRIAL_URL =
  `https://wa.me/5517988173773?text=${encodeURIComponent('Olá, quero fazer um teste grátis por 7 dias do sistema de Pós-Vendas & Multipropriedade.')}`;
const CONTACT_URL = 'https://wa.me/5517988173773';

const rentalSegments = [
  {
    icon: Tractor,
    title: 'Equipamentos & Maquinários',
    description: 'Construção civil, ferramentas e andaimes.',
  },
  {
    icon: Armchair,
    title: 'Mesas & Cadeiras',
    description: 'Mobiliário completo para festas e eventos.',
  },
  {
    icon: Shirt,
    title: 'Ternos & Vestidos de Noiva',
    description: 'Trajes finos e vestuário com controle de datas de prova e devolução.',
  },
  {
    icon: PartyPopper,
    title: 'Brinquedos para Festas',
    description: 'Pula-pula, piscina de bolinhas, brinquedos infláveis e entretenimento.',
  },
  {
    icon: Warehouse,
    title: 'Controle de Almoxarifado Interno',
    description: 'Rastreabilidade completa de ferramentas e insumos da empresa.',
  },
];

const features = [
  {
    icon: BriefcaseBusiness,
    title: 'Gestão Comercial',
    description: 'Criação e edição ágil de orçamentos e contratos, do primeiro contato ao fechamento.',
  },
  {
    icon: PackageCheck,
    title: 'Estoque na Linha',
    description: 'Controle do patrimônio disponível e das máquinas que estão em obra.',
  },
  {
    icon: Smartphone,
    title: 'Envio de Contratos via WhatsApp',
    description: 'Um link digital direto para o cliente consultar e receber o contrato.',
  },
  {
    icon: Wallet,
    title: 'Financeiro Descomplicado',
    description: 'Contas a pagar e faturamento unificados para você enxergar o caixa com clareza.',
  },
  {
    icon: Send,
    title: 'Régua de Cobrança Automática',
    description: 'Vencimentos e boletos enviados pelo WhatsApp do cliente.',
  },
  {
    icon: Warehouse,
    title: 'Almoxarifado & Rastreabilidade Total',
    description: 'Gestão de Almoxarifado e Retiradas: Saiba exatamente quem pegou o item, o que pegou, a data/hora da retirada e a confirmação quando o item for devolvido. Fim das perdas de ferramentas e equipamentos no seu estoque.',
  },
];

function normalizeCategory(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim();
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className="brand" href="#inicio" aria-label="1e+9 — início" data-testid={footer ? 'link-footer-home' : 'link-home'}>
      <span className="brand-mark" aria-hidden="true">
        <span>1e</span><span className="brand-plus">+</span><span>9</span>
      </span>
      {!footer && <span className="brand-caption">Business<br />Intelligence</span>}
    </a>
  );
}

function DashboardMockup() {
  return (
    <div className="hero-visual" aria-label="Prévia ilustrativa do sistema de gestão de locação">
      <div className="dashboard">
        <div className="dash-top">
          <div className="dash-logo"><span className="dash-dot" />1e+9 <span style={{ color: '#86909d', fontWeight: 500 }}>locação</span></div>
          <div className="dash-user">Olá, Marina&nbsp;&nbsp; <BadgeCheck size={12} color="#55976e" /></div>
        </div>
        <div className="dash-content">
          <aside className="dash-sidebar" aria-hidden="true">
            <div className="dash-side-label">MENU PRINCIPAL</div>
            <div className="dash-side-item active"><LayoutDashboard size={12} /> Visão geral</div>
            <div className="dash-side-item"><ClipboardList size={12} /> Orçamentos</div>
            <div className="dash-side-item"><FileText size={12} /> Contratos</div>
            <div className="dash-side-item"><Wrench size={12} /> Equipamentos</div>
            <div className="dash-side-item"><CircleDollarSign size={12} /> Financeiro</div>
          </aside>
          <div className="dash-main">
            <div className="dash-heading">
              <div><strong>Visão geral</strong><span>Resumo da sua operação</span></div>
              <div className="dash-date"><CalendarDays size={9} style={{ verticalAlign: 'middle', marginRight: 4 }} /> VISÃO GERAL</div>
            </div>
            <div className="metric-grid">
              <div className="metric"><div className="metric-label"><Banknote size={10} /> Financeiro</div><div className="metric-value">Em dia</div><div className="metric-change">Receitas e despesas</div></div>
              <div className="metric"><div className="metric-label"><Truck size={10} /> Equipamentos</div><div className="metric-value">Em obra</div><div className="metric-change">E disponíveis para locação</div></div>
              <div className="metric"><div className="metric-label"><ClipboardList size={10} /> Comercial</div><div className="metric-value">Organizado</div><div className="metric-change">Orçamentos e contratos</div></div>
            </div>
            <div className="dash-lower">
              <div className="panel">
                <div className="panel-title">Movimentação financeira <small>ENTRADAS</small></div>
                <div className="chart" aria-hidden="true">
                  {[34, 52, 41, 69, 48, 78, 60, 88, 59, 74, 66, 93].map((height, index) => <span className="bar" key={index} style={{ height: `${height}%` }} />)}
                </div>
                <div className="chart-labels"><span>JAN</span><span>MAR</span><span>MAI</span><span>JUN</span></div>
              </div>
              <div className="panel">
                <div className="panel-title">Equipamentos <small>STATUS</small></div>
                <div className="stock-list">
                  <div className="stock-row"><span className="stock-name"><i className="stock-indicator" />Betoneiras</span><b className="stock-count">Disponível</b></div>
                  <div className="stock-row"><span className="stock-name"><i className="stock-indicator warn" />Compactadores</span><b className="stock-count">Em obra</b></div>
                  <div className="stock-row"><span className="stock-name"><i className="stock-indicator" />Andaimes</span><b className="stock-count">Disponível</b></div>
                </div>
              </div>
            </div>
            <div className="dash-activity"><span>Movimentação recente</span><strong>Contrato • enviado via WhatsApp</strong></div>
          </div>
        </div>
      </div>
      <div className="float-card">
        <small>Acompanhamento</small>
        <strong>Contas a receber</strong>
        <span><Check size={10} style={{ verticalAlign: 'middle' }} /> Acompanhe pelo sistema</span>
      </div>
      <div className="machine-badge" aria-hidden="true"><Tractor size={19} /> Equipamentos</div>
    </div>
  );
}

function PostSalesVisual() {
  return (
    <div className="post-visual" aria-label="Ilustração de uma central de pós-vendas para multipropriedade">
      <div className="post-building">
        <Building2 size={100} aria-hidden="true" />
        <div className="post-building-caption">MULTIPROPRIEDADE</div>
      </div>
      <div className="post-note note-top">
        <CalendarClock size={21} />
        <div><strong>Notificações</strong><small>D+2 · D+10</small></div>
      </div>
      <div className="post-note note-bottom">
        <BellRing size={20} />
        <div><strong>Acompanhamento</strong><small>Boleto · ID RCI</small></div>
      </div>
    </div>
  );
}

function VideoGrid({ system }: { system: ProductSystem }) {
  const matchingVideos = videos.filter((video) => {
    if (system === 'locacao') {
      return video.sistema === 'locacao' && normalizeCategory(video.categoria) === 'locacao';
    }
    return video.sistema === 'pos_vendas';
  });

  if (system === 'locacao' && matchingVideos.length === 0) {
    return (
      <div className="rental-empty" role="status" data-testid="empty-videos-locacao">
        <Tractor size={25} aria-hidden="true" />
        <strong>Novos conteúdos de locação em breve.</strong>
        <p>Assim que houver vídeos da categoria Locação, eles aparecerão aqui.</p>
      </div>
    );
  }

  return (
    <div className="video-grid">
      {matchingVideos.map((video) => {
        const whatsappMessage = `Olá, gostaria de saber mais sobre o recurso "${video.titulo}" da categoria ${video.categoria}.`;
        const whatsappUrl = `https://wa.me/5517988173773?text=${encodeURIComponent(whatsappMessage)}`;
        return (
          <article className="video-card" key={video.id} data-testid={`card-conteudo-${video.id}`}>
            <div className="video-card-heading">
              <span className="video-category">{video.categoria}</span>
              <h3 id={`video-title-${video.id}`}>{video.titulo}</h3>
            </div>
            <div className="video-frame">
              <iframe
                src={video.youtube_url}
                title={video.titulo}
                aria-labelledby={`video-title-${video.id}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                tabIndex={0}
              />
            </div>
            <div className="video-card-body">
              <p>{video.descricao}</p>
              <a className="video-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid={`link-whatsapp-conteudo-${video.id}`}>
                <MessageCircle size={16} />
                Chamar no WhatsApp sobre este recurso
                <ArrowRight size={15} />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function RentalPage() {
  return (
    <div className="product-view" key="locacao">
      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="reveal">
              <div className="eyebrow">Sistema de gestão para locadoras</div>
              <h1>Pare de perder dinheiro com <span>planilhas de locação bagunçadas!</span></h1>
              <p className="hero-copy">Seja para equipamentos da construção civil, eventos ou almoxarifado, o controle de estoque e o financeiro são os maiores gargalos do negócio. Nosso sistema foi desenhado para resolver essa dor em qualquer segmento de locação.</p>
              <div className="hero-actions">
                <a className="button-primary" href={TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-hero">Testar grátis por 7 dias <ArrowRight size={16} /></a>
                <a className="button-outline" href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-contact-hero"><MessageCircle size={16} /> Falar com um especialista</a>
              </div>
              <div className="trial-note"><ShieldCheck size={14} /> Acesso completo por 7 dias. Sem cartão de crédito.</div>
            </div>
            <DashboardMockup />
          </div>
        </section>

        <section className="section rental-segments" aria-labelledby="segments-title">
          <div className="container">
            <div className="segments-heading">
              <div className="eyebrow" style={{ color: '#8e6715' }}>Locação em diferentes segmentos</div>
              <h2 id="segments-title">Ideal para o seu tipo de negócio</h2>
              <p>Organize locações, estoque e devoluções com uma solução que acompanha a variedade da sua operação.</p>
            </div>
            <div className="segment-grid">
              {rentalSegments.map(({ icon: Icon, title, description }, index) => (
                <article className="segment-card" key={title} data-testid={`segment-${index + 1}`}>
                  <div className="segment-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section features" id="recursos">
          <div className="container feature-layout">
            <div className="feature-aside" id="sistema">
              <div className="eyebrow" style={{ color: '#8e6715' }}>Tudo sob controle</div>
              <h2>Da primeira cotação ao último boleto.</h2>
              <p>Uma operação de locação tem muitas peças em movimento. Reúna as informações do negócio e acompanhe cada etapa sem depender de planilhas espalhadas.</p>
              <a className="button-primary" href={TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-features">Conhecer por 7 dias <ArrowRight size={15} /></a>
            </div>
            <div className="feature-rows">
              {features.map(({ icon: Icon, title, description }, index) => (
                <article className="feature-row" key={title} data-testid={`feature-${index + 1}`}>
                  <div className="feature-icon"><Icon size={20} strokeWidth={1.8} /></div>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <span className="feature-index">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section content-section" id="conteudos" aria-labelledby="content-title">
          <div className="container">
            <div className="content-heading">
              <div>
                <div className="eyebrow">Aprenda no Prático</div>
                <h2 id="content-title">Nossos Conteúdos</h2>
                <p>Conheça recursos e aprendizados para tornar a gestão da sua operação mais simples.</p>
              </div>
              <span className="content-mark" aria-hidden="true">1e<span>+</span>9 / CONTEÚDOS</span>
            </div>
            <VideoGrid system="locacao" />
          </div>
        </section>

        <section className="section control-band">
          <div className="container control-grid">
            <div className="control-copy">
              <div className="eyebrow" style={{ color: '#8e6715' }}>Operação organizada</div>
              <h2>Mais clareza para decidir. Mais controle para crescer.</h2>
              <p>Saiba o que está disponível, o que está em obra e o que precisa de atenção. Comercial, equipamentos e financeiro no mesmo fluxo de trabalho.</p>
              <div className="control-list">
                <span><Check className="check" size={16} /> Acompanhe os equipamentos e contratos</span>
                <span><Check className="check" size={16} /> Consulte contas e faturamento em um só lugar</span>
                <span><Check className="check" size={16} /> Envie contratos e cobranças pelo WhatsApp</span>
              </div>
            </div>
            <div className="ledger" aria-label="Exemplo ilustrativo de resumo financeiro">
              <div className="ledger-head"><strong>Resumo financeiro</strong><span>VISÃO DO PERÍODO</span></div>
              <div className="ledger-total"><small>Faturamento registrado</small><strong>Visão unificada</strong></div>
              <div className="ledger-item"><span><Banknote size={13} style={{ verticalAlign: 'middle', marginRight: 7 }} />Contas a receber</span><strong>Acompanhe</strong></div>
              <div className="ledger-item"><span><Wallet size={13} style={{ verticalAlign: 'middle', marginRight: 7 }} />Contas a pagar</span><strong>Acompanhe</strong></div>
              <div className="ledger-item"><span><FileText size={13} style={{ verticalAlign: 'middle', marginRight: 7 }} />Cobranças enviadas</span><span className="ledger-tag">ACOMPANHÁVEIS</span></div>
            </div>
          </div>
        </section>

        <section className="trial-section" id="teste-gratis">
          <div className="container">
            <div className="trial-card">
              <div className="trial-text">
                <div className="trial-kicker">Comece sem complicação</div>
                <h2>TESTE GRÁTIS POR 7 DIAS</h2>
                <p>Experimente o poder total da nossa plataforma sem restrições. Acesse todos os módulos de locação e financeiro gratuitamente por uma semana.</p>
              </div>
              <div className="trial-actions">
                <a className="button-primary" href={TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-final">Acessar Teste Grátis Agora <ArrowRight size={16} /></a>
                <a className="button-outline" href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-contact-final"><MessageCircle size={15} /> Falar no WhatsApp (17 98817-3773)</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function PostSalesPage() {
  return (
    <div className="product-view" key="pos-vendas">
      <main>
        <section className="hero post-hero" id="inicio">
          <div className="container hero-grid">
            <div className="reveal">
              <div className="eyebrow">Sistema para pós-vendas &amp; multipropriedade</div>
              <h1>Cansado de inadimplência e cancelamento no seu borderô?</h1>
              <p className="post-impact">De nunca saber quanto vai ganhar nos meses seguintes?</p>
              <div className="post-highlight">Tenha tudo isso na palma da sua mão!</div>
              <p className="resource-line">Controle de vendas <span>|</span> Conferência de borderô <span>|</span> Pós-vendas dinâmico.</p>
              <div className="hero-actions">
                <a className="button-primary" href={POST_SALES_TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-pos-vendas">Teste grátis por 7 dias <ArrowRight size={16} /></a>
                <a className="button-outline" href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-contact-pos-vendas"><MessageCircle size={16} /> Falar no WhatsApp</a>
              </div>
            </div>
            <PostSalesVisual />
          </div>
        </section>

        <section className="post-story" id="sistema">
          <div className="container post-story-grid">
            <div className="post-story-intro">
              <div className="eyebrow" style={{ color: '#8e6715' }}>Pós-vendas que acompanha de verdade</div>
              <h2>Mais cuidado no relacionamento. Mais controle do seu borderô.</h2>
              <p>Um dos maiores motivos de cancelamento e inadimplência no nosso mercado é a carência de um bom pós-vendas. O sistema 1e+9 foi criado exclusivamente para você que trabalha com multipropriedade. Dar um excelente pós-vendas para seus clientes evita cancelamentos, inadimplência e engorda seu borderô!</p>
            </div>
            <div className="post-story-copy" id="recursos">
              <p>Quem não quer ter controle do seu borderô, das suas vendas? Mas fazer isso manualmente dá trabalho, toma nosso tempo e, de verdade, quem lembra de todas as vendas que fez de cabeça, né?</p>
              <div className="post-automations" aria-label="Automatizações de pós-vendas">
                <div className="automation-row"><CalendarClock size={23} /><div><strong>Notificações em D+2 e D+10</strong><span>Lembretes programados para acompanhar o cliente depois da venda.</span></div></div>
                <div className="automation-row"><BellRing size={22} /><div><strong>Lembretes de vencimento do boleto</strong><span>Avise sobre a data de vencimento e proteja sua comissão da inadimplência.</span></div></div>
                <div className="automation-row"><BadgeCheck size={22} /><div><strong>Alerta quando o ID RCI estiver disponível</strong><span>Saiba quando o ID RCI do cliente estiver disponível.</span></div></div>
              </div>
              <p className="seller-invite">Já imaginou ser um top seller?</p>
              <p className="post-trial-copy" id="teste-gratis">Faça um teste totalmente grátis por 7 dias sem precisar adicionar cartão. Faça seu cadastro agora ou me chame no WhatsApp para maiores informações.</p>
              <div className="hero-actions">
                <a className="button-primary" href={POST_SALES_TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-pos-vendas-story">Faça seu teste grátis <ArrowRight size={16} /></a>
                <a className="button-outline" href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-contact-pos-vendas-story"><MessageCircle size={16} /> Chamar no WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section content-section post-content-section" id="conteudos" aria-labelledby="content-title">
          <div className="container">
            <div className="content-heading">
              <div>
                <div className="eyebrow">Conteúdos de produto</div>
                <h2 id="content-title">Pós-vendas na prática</h2>
                <p>Veja orientações e demonstrações do sistema para sua operação de multipropriedade.</p>
              </div>
              <span className="content-mark" aria-hidden="true">1e<span>+</span>9 / CONTEÚDOS</span>
            </div>
            <VideoGrid system="pos_vendas" />
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  const [system, setSystem] = useState<ProductSystem>('locacao');

  useEffect(() => {
    const rental = system === 'locacao';
    const title = rental
      ? '1e+9 | Sistema de gestão para locação de equipamentos'
      : '1e+9 | Sistema de Pós-Vendas & Multipropriedade';
    const description = rental
      ? 'Controle contratos, estoque e financeiro da sua locadora de equipamentos em um só lugar. Teste grátis por 7 dias.'
      : 'Controle vendas, confira seu borderô e acompanhe o pós-vendas da sua operação de multipropriedade.';
    document.title = title;
    const upsertMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', name);
        else tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    upsertMeta('description', description);
    upsertMeta('og:title', title, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:site_name', '1e+9 Business Intelligence', true);
  }, [system]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <nav className="nav-wrap" aria-label="Navegação principal">
          <Brand />
          <div className="nav-links">
            <a href="#sistema" data-testid="link-nav-sistema">O sistema</a>
            <a href="#recursos" data-testid="link-nav-recursos">Recursos</a>
            <a href="#conteudos" data-testid="link-nav-conteudos">Conteúdos</a>
            <a href="#teste-gratis" data-testid="link-nav-teste">Teste grátis</a>
          </div>
          <a className="nav-cta" href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-nav-contato">
            <MessageCircle size={15} /> Fale com um especialista
          </a>
        </nav>
      </header>

      <div className="system-switcher">
        <div className="switcher-inner">
          <div className="switcher-label"><strong>Escolha seu sistema</strong><span>Uma solução para cada operação</span></div>
          <div className="switcher-options" role="group" aria-label="Selecione um sistema">
            <button className="switcher-option switcher-option--rental" type="button" aria-pressed={system === 'locacao'} onClick={() => setSystem('locacao')} data-testid="button-system-locacao">
              <Package size={18} aria-hidden="true" />
              <span className="switcher-option-copy">
                <strong>Sistema de Locações</strong>
                <small>Equipamentos • Festas &amp; Eventos • Trajes • Almoxarifado</small>
              </span>
            </button>
            <button className="switcher-option" type="button" aria-pressed={system === 'pos_vendas'} onClick={() => setSystem('pos_vendas')} data-testid="button-system-pos-vendas">
              <Building2 size={17} aria-hidden="true" /><span>Sistema de Pós-Vendas &amp; Multipropriedade</span>
            </button>
          </div>
        </div>
      </div>

      {system === 'locacao' ? <RentalPage /> : <PostSalesPage />}

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Brand footer />
              <p>1e+9 Business Intelligence<br />Soluções para locação e multipropriedade.</p>
            </div>
            <div>
              <h3>Acesso rápido</h3>
              <div className="footer-links">
                <a href="#sistema" data-testid="link-footer-sistema">O sistema <ChevronRight size={12} /></a>
                <a href="#recursos" data-testid="link-footer-recursos">Recursos <ChevronRight size={12} /></a>
                <a href="#conteudos" data-testid="link-footer-conteudos">Conteúdos <ChevronRight size={12} /></a>
                <a href="#teste-gratis" data-testid="link-footer-teste">Teste grátis <ChevronRight size={12} /></a>
              </div>
            </div>
            <div>
              <h3>Fale com a gente</h3>
              <div className="footer-contact">
                <a href="https://1emais9.com.br" target="_blank" rel="noreferrer" data-testid="link-footer-site"><ArrowRight size={14} /> 1emais9.com.br</a>
                <a href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp"><MessageCircle size={14} /> WhatsApp (17) 98817-3773</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} 1e+9 Business Intelligence. Todos os direitos reservados.</span>
            <span>LOCAR. CONTROLAR. SEGUIR EM FRENTE.</span>
          </div>
        </div>
      </footer>

      <a className="floating-whatsapp" href={CONTACT_URL} target="_blank" rel="noreferrer" aria-label="Fale conosco pelo WhatsApp" data-testid="link-floating-whatsapp">
        <MessageCircle size={25} />
      </a>
    </div>
  );
}

export default App;