import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Star, 
  ArrowRight, 
  Lock, 
  Users, 
  TrendingUp, 
  PackageCheck, 
  HelpCircle,
  Truck,
  Smartphone,
  ChevronDown,
  Gift,
  Clock,
  BadgePercent
} from 'lucide-react';

export default function PaginaVendasFornecedores() {
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  const handleCheckout = () => {
    // Redirecionamento configurável para o link da sua plataforma de pagamentos (Kiwify, Hotmart, Eduzz, etc)
    window.open('https://pay.kiwify.com.br', '_blank');
  };

  const nichos = [
    { nome: 'Moda Feminina & Vestuário', descricao: 'Vestidos, jeans, croppeds direto do Brás e Bom Retiro', tag: 'Margem até 300%' },
    { nome: 'Eletrônicos & Acessórios', descricao: 'Fones bluetooth, smartwatches, capas e cabos de atacado', tag: 'Mais Vendidos' },
    { nome: 'Maquiagens & Cosméticos', descricao: 'Makes baratas, skincare nacional e importados autênticos', tag: 'Alta Procura' },
    { nome: 'Calçados & Tênis Premium', descricao: 'Rasteirinhas de Franca, sapatilhas e tênis de qualidade', tag: 'Direto de Fábrica' },
    { nome: 'Moda Praia & Fitness', descricao: 'Biquínis, maiôs, leggings e tops em suplex e poliamida', tag: 'Tendência 2025' },
    { nome: 'Perfumes Importados & Decants', descricao: 'Perfumes lacrados e contratipos com excelente fixação', tag: 'Alta Rentabilidade' },
    { nome: 'Pratas 925 & Semijoias', descricao: 'Peças com garantia de fábrica e atacado acessível', tag: 'Lucro de 400%' },
    { nome: 'Dropshipping Nacional', descricao: 'Envio no mesmo dia com a sua etiqueta para todo o Brasil', tag: 'Sem Estoque' },
  ];

  const depoimentos = [
    {
      nome: 'Camila Ferreira',
      cidade: 'Goiânia - GO',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      lucro: 'R$ 8.450/mês',
      texto: 'Eu comprava de atravessador pagando R$ 45 numa blusa. Com a lista peguei o fabricante direto a R$ 14,90! Tripliquei meu lucro já no primeiro mês da minha loja online.'
    },
    {
      nome: 'Rafael Albuquerque',
      cidade: 'São Paulo - SP',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      lucro: 'R$ 14.200/mês',
      texto: 'O módulo de Dropshipping Nacional valeu 10x o valor da lista. Vendo eletrônicos sem ter 1 real parado em estoque e meus clientes recebem em até 3 dias úteis.'
    },
    {
      nome: 'Larissa Duarte',
      cidade: 'Belo Horizonte - MG',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      lucro: 'R$ 6.180/mês',
      texto: 'Todos os contatos atendem por WhatsApp de verdade! Nada daquelas listas antigas cheias de número inválido. Super testada e confiável.'
    }
  ];

  const bonus = [
    {
      titulo: 'BÔNUS #01: Script de Abordagem para Atacado',
      valorOriginal: 'R$ 97,00',
      descricao: 'Mensagens prontas no WhatsApp para negociar preço de lojista mesmo comprando pequenas quantidades.'
    },
    {
      titulo: 'BÔNUS #02: Calculadora Automática de Precificação & Lucro',
      valorOriginal: 'R$ 67,00',
      descricao: 'Planilha inteligente onde você coloca o custo e ela diz o preço exato para cobrir taxas e garantir margem limpa.'
    },
    {
      titulo: 'BÔNUS #03: Grupo VIP de Alerta de Novidades e Atualizações',
      valorOriginal: 'R$ 147,00',
      descricao: 'Acesso vitalício ao canal de atualizações semanais com novos fornecedores verificados adicionados à lista.'
    }
  ];

  const faqs = [
    {
      pergunta: 'Como e quando recebo o acesso à lista?',
      resposta: 'Imediatamente após a confirmação do pagamento! Pagamentos no Cartão de Crédito e Pix liberam o link no seu e-mail e na tela em menos de 2 minutos.'
    },
    {
      pergunta: 'Preciso ter CNPJ para comprar desses fornecedores?',
      resposta: 'Não! Mais de 80% dos fornecedores listados vendem para Pessoa Física (apenas com CPF) e com pedidos mínimos muito baixos (a partir de 3 a 6 peças).'
    },
    {
      pergunta: 'Os contatos realmente funcionam e são confiáveis?',
      resposta: 'Sim! Nossa equipe entra em contato regularmente para validar CNPJs, canais de atendimento e idoneidade de cada fabricante antes de mantê-los na lista.'
    },
    {
      pergunta: 'E se eu não gostar do material?',
      resposta: 'Você tem 7 dias de garantia incondicional. Se achar que a lista não é para você, basta enviar um único e-mail que devolveremos 100% do seu dinheiro, sem burocracia.'
    },
    {
      pergunta: 'O acesso tem mensalidade?',
      resposta: 'Não há nenhuma mensalidade! O pagamento é único e você terá acesso vitalício com todas as futuras atualizações de fornecedores sem pagar nada a mais por isso.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Barra de Urgência no Topo */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 py-2.5 px-4 text-center font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md">
        <Clock className="w-4 h-4 animate-spin text-slate-950" />
        <span>OFERTA ESPECIAL: 75% OFF + 3 Bônus Exclusivos apenas até hoje!</span>
      </div>

      {/* HERO SECTION */}
      <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>A Fonte Secreta dos Maiores Lojistas do Brasil</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none max-w-4xl mx-auto">
          Pare de Enriquecer Atravessadores. Compre Direto das <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Melhores Fábricas</span> com até 400% de Lucro!
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Mais de <strong>600+ fornecedores secretos e testados</strong> de Moda, Eletrônicos, Makes, Dropshipping e Calçados com atendimento por WhatsApp e envio para todo o Brasil.
        </p>

        {/* CTA Principal */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <button
            onClick={handleCheckout}
            className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-lg sm:text-xl rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>QUERO ACESSO À LISTA SECRETA AGORA</span>
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </button>
          
          <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Compra 100% Segura</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-amber-400" /> Acesso Imediato</span>
            <span className="flex items-center gap-1"><BadgePercent className="w-4 h-4 text-blue-400" /> 7 Dias de Garantia</span>
          </div>
        </div>

        {/* Badges de Prova Social */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">600+</div>
            <div className="text-xs text-slate-400 mt-0.5">Contatos Verificados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">+12.400</div>
            <div className="text-xs text-slate-400 mt-0.5">Lojistas Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">CPF e CNPJ</div>
            <div className="text-xs text-slate-400 mt-0.5">Aceitos no Atacado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 mt-0.5">Avaliação Média</div>
          </div>
        </div>
      </header>

      {/* COMPARAÇÃO: ANTES VS DEPOIS */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Por que você ainda não ganha dinheiro vendendo online?</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">Veja a real diferença entre depender do intermediário e comprar na fonte:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Como a maioria faz */}
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 relative">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">SEM A LISTA</span>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span> Compra de revendedores locais com margem de lucro espremida (20% a 30%).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span> Gasta tempo e dinheiro viajando para polos atacadistas sem conhecer ninguém.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span> Risco imenso de cair em golpes de PIX com perfis fakes no Instagram.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span> Pedidos mínimos abusivos de R$ 2.000 para conseguir algum desconto.
                </li>
              </ul>
            </div>

            {/* Com a nossa Lista */}
            <div className="bg-emerald-950/25 border border-emerald-500/30 rounded-2xl p-6 relative shadow-lg shadow-emerald-950/40">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">COM A LISTA SECRETA</span>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Preço de fábrica real para lucrar <strong>100%, 200% até 400%</strong> nas vendas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Faça os pedidos no conforto de casa direto no <strong>WhatsApp do fabricante</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>Zero risco de golpes</strong>: fornecedores verificados e com reputação checada.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Compre como pessoa física (<strong>apenas CPF</strong>) a partir de poucas peças.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO NA LISTA (CATEGORIAS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Quais Categorias Você Terá Acesso?</h2>
          <p className="text-slate-400 mt-3 text-base">Uma seleção completa dos nichos mais lucrativos da internet para você montar sua loja ou revender hoje mesmo.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {nichos.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded mb-3">
                {item.tag}
              </span>
              <h3 className="font-bold text-lg text-white mb-1.5">{item.nome}</h3>
              <p className="text-sm text-slate-400">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS / PROVA SOCIAL */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-800/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Quem Comprou, Mudou de Vida</h2>
            <p className="text-slate-400 mt-2">Veja os resultados de lojistas e revendedores que destravam suas margens com os fornecedores da lista.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((dep, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">"{dep.texto}"</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                  <img src={dep.foto} alt={dep.nome} className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/30" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{dep.nome}</h4>
                    <p className="text-xs text-slate-400">{dep.cidade}</p>
                    <span className="inline-block text-[11px] font-semibold text-emerald-400 mt-0.5">Faturamento: {dep.lucro}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS EXCLUSIVOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">Presentes Gratuitos</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">Comprando Hoje, Você Leva 3 Bônus Especiais</h2>
        </div>

        <div className="space-y-4">
          {bonus.map((b, i) => (
            <div key={i} className="bg-gradient-to-r from-slate-900 to-slate-800/90 border border-amber-500/20 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white">{b.titulo}</h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-xl">{b.descricao}</p>
                </div>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-xs text-slate-400 block line-through">De {b.valorOriginal}</span>
                <span className="text-sm font-black text-emerald-400 uppercase">GRÁTIS HOJE</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING / OFERTA */}
      <section id="preco" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto bg-slate-900 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-xs font-extrabold px-6 py-1.5 uppercase rounded-bl-xl tracking-wider">
            Melhor Oferta
          </div>

          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Acesso Completo & Vitalício</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Lista Secreta de Fornecedores 2025</h3>

          <div className="mt-6 flex flex-col items-center">
            <span className="text-sm sm:text-base text-slate-400 line-through">De R$ 197,00 por apenas:</span>
            <div className="mt-2 flex items-baseline gap-1 text-white">
              <span className="text-xl sm:text-2xl font-bold">R$</span>
              <span className="text-5xl sm:text-6xl font-black text-emerald-400">47</span>
              <span className="text-xl font-bold">,90</span>
            </div>
            <span className="text-xs text-slate-400 mt-1">ou 5x de R$ 10,42 no cartão</span>
          </div>

          <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>+600 Fornecedores de Fábrica Verificados</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Contatos diretos de WhatsApp e Catálogos</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Compra liberada com CPF ou CNPJ</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Lista de Dropshipping Nacional sem estoque</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>3 Super Bônus Exclusivos inclusos</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Acesso Imediato e Atualizações Vitalícias</span>
            </li>
          </ul>

          <button
            onClick={handleCheckout}
            className="w-full mt-8 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-lg sm:text-xl rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>QUERO MEU ACESSO IMEDIATO</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>

          <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Pagamento protegido com criptografia de ponta a ponta
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Garantia Incondicional de 7 Dias</h3>
            <p className="text-sm text-slate-300 mt-2">
              Você tem 7 dias inteiros para abrir a lista, testar os contatos e conferir os preços de fábrica. Se por qualquer motivo você não ficar 100% satisfeito, basta nos avisar que estornamos todo o seu investimento na hora.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Perguntas Frequentes</h2>
          <p className="text-slate-400 text-sm mt-1">Tire todas as suas dúvidas antes de garantir a sua vaga.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-white font-semibold text-sm sm:text-base hover:text-amber-400 transition-colors"
              >
                <span>{faq.pergunta}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${faqAberto === idx ? 'rotate-180 text-amber-400' : ''}`} />
              </button>
              {faqAberto === idx && (
                <div className="px-5 pb-5 text-sm text-slate-300 border-t border-slate-800/60 pt-3">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-500 px-4">
        <p>© {new Date().getFullYear()} Lista Secreta de Fornecedores. Todos os direitos reservados.</p>
        <p className="mt-1">Este site não tem vínculo com o Facebook, Google ou qualquer entidade governamental.</p>
      </footer>
    </div>
  );
}
