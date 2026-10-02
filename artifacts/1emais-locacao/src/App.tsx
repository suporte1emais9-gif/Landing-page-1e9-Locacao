import { useEffect } from 'react';
import videos from './data/videos.json';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  FileText,
  LayoutDashboard,
  MessageCircle,
  PackageCheck,
  Send,
  ShieldCheck,
  Smartphone,
  Truck,
  Wallet,
  Wrench,
} from 'lucide-react';

const TRIAL_URL =
  'https://wa.me/5517988173773?text=Olá,%20quero%20testar%20grátis%20o%20sistema%20de%20locação%20por%207%20dias';
const CONTACT_URL = 'https://wa.me/5517988173773';

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
];

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
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = '1e+9 | Sistema de gestão para locação de equipamentos';
    const description = 'Controle contratos, estoque e financeiro da sua locadora de equipamentos em um só lugar. Teste grátis por 7 dias.';
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
    upsertMeta('og:title', '1e+9 | Sistema de gestão para locação de equipamentos', true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:site_name', '1e+9 Business Intelligence', true);
  }, []);

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

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="reveal">
              <div className="eyebrow">Sistema de gestão para locadoras</div>
              <h1>Pare de perder dinheiro com <span>planilhas de locação bagunçadas!</span></h1>
              <p className="hero-copy">Se você trabalha com locação de equipamentos e maquinários para a construção civil, sabe que o controle de estoque e o financeiro são os maiores gargalos do negócio. Nosso sistema foi desenhado especificamente para resolver essa dor.</p>
              <div className="hero-actions">
                <a className="button-primary" href={TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-hero">
                  Testar grátis por 7 dias <ArrowRight size={16} />
                </a>
                <a className="button-outline" href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-contact-hero">
                  <MessageCircle size={16} /> Falar com um especialista
                </a>
              </div>
              <div className="trial-note"><ShieldCheck size={14} /> Acesso completo por 7 dias. Sem cartão de crédito.</div>
            </div>
            <DashboardMockup />
          </div>
        </section>

        <section className="section features" id="recursos">
          <div className="container feature-layout">
            <div className="feature-aside" id="sistema">
              <div className="eyebrow" style={{ color: '#8e6715' }}>Tudo sob controle</div>
              <h2>Da primeira cotação ao último boleto.</h2>
              <p>Uma operação de locação tem muitas peças em movimento. Reúna as informações do negócio e acompanhe cada etapa sem depender de planilhas espalhadas.</p>
              <a className="button-primary" href={TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-features">
                Conhecer por 7 dias <ArrowRight size={15} />
              </a>
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
            <div className="video-grid">
              {videos.map((video) => {
                const whatsappMessage = `Olá, gostaria de saber mais sobre o recurso "${video.titulo}" da categoria ${video.categoria}.`;
                const whatsappUrl = `https://wa.me/5517988173773?text=${encodeURIComponent(whatsappMessage)}`;
                return (
                  <article className="video-card" key={video.id} data-testid={`card-conteudo-${video.id}`}>
                    <div className="video-frame">
                      <iframe
                        src={video.youtube_url}
                        title={`${video.titulo} — playlist de conteúdos da 1e+9`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        tabIndex={0}
                      />
                    </div>
                    <div className="video-card-body">
                      <span className="video-category">{video.categoria}</span>
                      <h3>{video.titulo}</h3>
                      <p>{video.descricao}</p>
                      <a
                        className="video-whatsapp"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`link-whatsapp-conteudo-${video.id}`}
                      >
                        <MessageCircle size={16} />
                        Chamar no WhatsApp sobre este recurso
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
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
                <a className="button-primary" href={TRIAL_URL} target="_blank" rel="noreferrer" data-testid="link-trial-final">
                  Acessar Teste Grátis Agora <ArrowRight size={16} />
                </a>
                <a className="button-outline" href={CONTACT_URL} target="_blank" rel="noreferrer" data-testid="link-contact-final">
                  <MessageCircle size={15} /> Falar no WhatsApp (17 98817-3773)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Brand footer />
              <p>1e+9 Business Intelligence<br />Gestão para negócios de locação.</p>
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