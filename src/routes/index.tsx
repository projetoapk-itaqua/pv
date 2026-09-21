import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Truck,
  ArrowRight,
  Flame,
  Zap,
  Lock,
  Gift,
  HelpCircle,
  Clock,
  Star,
  Users,
  Award,
  ChevronDown,
  DollarSign,
  PackageCheck,
  Percent,
  Play,
  FileSpreadsheet
} from "lucide-react";

export default function PaginaDeVendasFornecedores() {
  // Timer de escassez regressivo
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 48,
  });

  // Notificação flutuante de compras recentes
  const [recentBuyer, setRecentBuyer] = useState<{ name: string; city: string; time: string } | null>(null);

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Simulador de margem de lucro
  const [precoAtacado, setPrecoAtacado] = useState<number>(35);
  const [precoVenda, setPrecoVenda] = useState<number>(139);
  const lucroPorPeca = precoVenda - precoAtacado;
  const margemPercentual = Math.round((lucroPorPeca / precoVenda) * 100);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 }; // Reseta suave
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Notificações de prova social ao vivo
  useEffect(() => {
    const buyers = [
      { name: "Mariana S.", city: "São Paulo - SP", time: "há 2 minutos" },
      { name: "Lucas R.", city: "Belo Horizonte - MG", time: "há 4 minutos" },
      { name: "Camila V.", city: "Curitiba - PR", time: "há 1 minuto" },
      { name: "Felipe M.", city: "Fortaleza - CE", time: "há 3 minutos" },
      { name: "Bruna K.", city: "Goiânia - GO", time: "há 5 minutos" },
    ];
    let index = 0;
    const interval = setInterval(() => {
      setRecentBuyer(buyers[index]);
      setTimeout(() => setRecentBuyer(null), 4500);
      index = (index + 1) % buyers.length;
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const scrollToCheckout = () => {
    const el = document.getElementById("oferta-principal");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categorias = [
    {
      nome: "Moda & Vestuário Premium",
      tags: ["Brás", "Bom Retiro", "Goiânia"],
      desc: "Moda feminina, masculina, infantil, moda íntima e jeans de shopping a preço de custo.",
      margem: "Até 300% de lucro",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      nome: "Eletrônicos & Acessórios",
      tags: ["Santa Ifigênia", "Importação Direta"],
      desc: "Smartwatches, fones bluetooth, caixas de som, capinhas e cabos homologados Anatel.",
      margem: "Até 250% de lucro",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    },
    {
      nome: "Perfumaria & Cosméticos",
      tags: ["Originais", "Contratipos Finos", "Skincare"],
      desc: "Perfumes importados selados, maquiagens de alta procura e dermocosméticos renomados.",
      margem: "Até 180% de lucro",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    },
    {
      nome: "Pratas 925 & Semijoias",
      tags: ["Garantia Eterna", "Limeira", "Direto de Fábrica"],
      desc: "Colares, pulseiras, brincos e anéis em Prata 925 legítima e banhados a ouro 18k.",
      margem: "Até 400% de lucro",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    },
    {
      nome: "Calçados & Sneakers",
      tags: ["Nova Serrana", "Franca", "Tenis Premium"],
      desc: "Tênis casuais, esportivos, rasteirinhas e botas direto dos principais polos calçadistas.",
      margem: "Até 220% de lucro",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      nome: "Dropshipping Nacional",
      tags: ["Envio Rápido 24h", "Sem Estoque"],
      desc: "Fornecedores no Brasil que enviam direto para o seu cliente com a sua marca na etiqueta.",
      margem: "Sem investimento inicial em estoque",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const depoimentos = [
    {
      nome: "Renata Vasconcelos",
      cidade: "Sorocaba / SP",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      faturamento: "R$ 18.420 / mês",
      texto:
        "Eu pagava R$ 89 numa peça com atravessador de Instagram. Com a Lista Ouro descobri o fabricante direto do Brás vendendo por R$ 24,00 a mesma peça! Minha loja triplicou o faturamento no segundo mês.",
    },
    {
      nome: "Diego Santana",
      cidade: "Uberlândia / MG",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      faturamento: "R$ 34.900 / mês",
      texto:
        "Os contatos de eletrônicos e fones bluetooth têm envio ultra-rápido por transportadora. Em 2 dias chega na minha porta. Os caras emitem nota fiscal e atendem até aos sábados. Vale 10x o valor cobrado.",
    },
    {
      nome: "Carla Mendes",
      cidade: "Salvador / BA",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      faturamento: "R$ 11.200 / mês",
      texto:
        "Comecei no dropshipping nacional usando a lista de semijoias. Vendi R$ 4 mil na primeira semana sem ter 1 real guardado de estoque. O bônus com roteiro de negociação no WhatsApp é surreal!",
    },
  ];

  const faqs = [
    {
      q: "Preciso ter CNPJ para comprar dos fornecedores da lista?",
      a: "Não! Mais de 85% dos fornecedores catalogados aceitam vendas para pessoa física (CPF) sem qualquer burocracia, com pedidos mínimos muito baixos (a partir de 3 a 6 peças). Se você tiver CNPJ, há condições ainda mais exclusivas.",
    },
    {
      q: "Como tenho certeza de que esses fornecedores são confiáveis e não golpistas?",
      a: "Nossa equipe realiza compras misteriosas e validação presencial ou cadastral completa de cada empresa: checamos CNPJ, endereço físico, tempo de mercado, notas fiscais, reputação no Reclame Aqui e rapidez na entrega. Você só fala com empresas sérias e validadas.",
    },
    {
      q: "Como e quando recebo o acesso à lista?",
      a: "O acesso é imediato! Assim que o seu pagamento for aprovado (cartão de crédito ou PIX leva menos de 60 segundos), você recebe em seu e-mail e WhatsApp os dados de login para nossa plataforma interativa com planilha, contatos diretos de WhatsApp e canal VIP de atualizações.",
    },
    {
      q: "E se os contatos pararem de funcionar?",
      a: "A Lista Ouro é atualizada mensalmente. Você recebe acesso vitalício com atualizações contínuas grátis. Quando um contato muda ou novos fabricantes de ponta surgem, eles são adicionados automaticamente sem você pagar nada a mais por isso.",
    },
    {
      q: "Tem garantia se eu não gostar?",
      a: "Sim, risco 100% nosso. Você tem 7 dias inteiros de garantia incondicional. Se abrir o material, conferir os contatos e achar que não valeu o investimento, basta mandar um único e-mail que estornamos 100% do seu dinheiro, sem perguntas e sem letras miúdas.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Barra de Urgência Topo */}
      <aside aria-label="Alerta de urgência" className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
          <span className="inline-flex items-center gap-1.5 uppercase tracking-wide bg-slate-950 text-amber-300 px-2 py-0.5 rounded text-[11px]">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
            LOTE PROMOCIONAL 2025
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="text-slate-900 font-semibold">
            Desconto de 75% encerra em:
          </span>
          <div className="inline-flex items-center gap-1 font-mono bg-slate-950/90 text-amber-300 px-2 py-0.5 rounded shadow-inner">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
          <button
            onClick={scrollToCheckout}
            className="underline hover:text-black font-extrabold cursor-pointer ml-1"
          >
            Garantir Desconto Agora →
          </button>
        </div>
      </aside>

      {/* Hero Section */}
      <header className="relative pt-12 pb-20 overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs sm:text-sm mb-6 shadow-sm shadow-amber-500/10">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Mais de 1.400 Fabricantes Verificados & Testados
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl mx-auto">
            Descubra os <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">Fornecedores Secretos</span> das Maiores Lojas do Brasil e lucre até{" "}
            <span className="text-amber-400 underline decoration-amber-500/60 decoration-wavy">400% por peça</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Elimine atravessadores que devoram sua margem. Tenha em mãos o contato direto de WhatsApp dos donos de fábricas de roupas, eletrônicos, semijoias e dropshipping nacional.
          </p>

          {/* Video Placeholder / Mockup Hero */}
          <div className="mt-10 relative max-w-3xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-amber-500/40 via-slate-800 to-slate-900 shadow-2xl shadow-amber-500/10">
            <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video flex flex-col items-center justify-center border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80"
                alt="Vídeo de Apresentação da Lista"
                className="absolute inset-0 w-full h-full object-cover opacity-35"
              />
              <div className="relative z-10 flex flex-col items-center p-6 text-center">
                <button
                  onClick={scrollToCheckout}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/50 transition-all hover:scale-105 active:scale-95 group mb-4"
                  aria-label="Assistir apresentação e liberar lista"
                >
                  <Play className="w-8 h-8 fill-slate-950 ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Tour Completo em 2 Minutos
                </span>
                <p className="text-sm text-slate-200 font-medium mt-1">
                  Veja como acessar contatos diretos no WhatsApp dos fabricantes
                </p>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-400 bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  +12.840 revendedores já utilizam esta lista
                </span>
                <span className="hidden sm:inline font-mono">Atualizado: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</span>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToCheckout}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-lg sm:text-xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all duration-200 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>QUERO ACESSO À LISTA SECRETA AGORA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Selos Hero */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-sky-400" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-purple-400" />
              <span>Envio para Todo o Brasil</span>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Comparativa: Antes vs Depois */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Por que a maioria dos lojistas não consegue lucrar alto?
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              A diferença entre ter um negócio altamente lucrativo ou fechar no vermelho está em onde você compra suas mercadorias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* O Lado Errado */}
            <div className="p-6 sm:p-8 rounded-2xl bg-red-950/20 border border-red-900/40 relative">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-4 bg-red-900/30 px-3 py-1 rounded">
                Sem a Lista (Comprando de Intermediários)
              </div>
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg leading-none">✕</span>
                  <span>Paga o dobro ou o triplo comprando de atravessador de Instagram.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg leading-none">✕</span>
                  <span>Margens esmagadas (15% a 25%), quase não sobra lucro no final do mês.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg leading-none">✕</span>
                  <span>Medo constante de cair em golpe do frete falso no WhatsApp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg leading-none">✕</span>
                  <span>Gasta rios de dinheiro viajando até o Brás/25 de Março sem saber onde ir.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg leading-none">✕</span>
                  <span>Não consegue fazer promoções agressivas porque o custo é alto demais.</span>
                </li>
              </ul>
            </div>

            {/* O Lado Certo */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 relative shadow-xl shadow-emerald-950/30">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4 bg-emerald-900/40 px-3 py-1 rounded">
                Com a Lista Ouro dos Fornecedores
              </div>
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Preço real de atacado:</strong> contato de quem realmente fabrica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Margens de 150% a 400%:</strong> sobra dinheiro no bolso para reinvestir e crescer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Verificados:</strong> CNPJ checado, endereço real e recomendações confiáveis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Peça pelo celular do sofá:</strong> entrega por Correios, Jadlog, ônibus de excursão ou aéreo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Opção de <strong>Dropshipping Nacional:</strong> venda sem ter dinheiro preso em estoque.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador Interativo de Lucro */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl relative">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">
              <Percent className="w-4 h-4" /> Simulador de Margem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Veja o poder de comprar direto da fonte
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Ajuste os valores abaixo e descubra quanto você pode faturar vendendo apenas 50 peças no mês:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span className="text-slate-300">Custo no Fornecedor (Fábrica):</span>
                    <span className="text-amber-400 font-bold font-mono">R$ {precoAtacado},00</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={precoAtacado}
                    onChange={(e) => setPrecoAtacado(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                  <span className="text-[11px] text-slate-500">Ex: vestido, conjunto, tênis ou perfume importado</span>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span className="text-slate-300">Preço Médio de Venda na Loja:</span>
                    <span className="text-emerald-400 font-bold font-mono">R$ {precoVenda},00</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="400"
                    step="5"
                    value={precoVenda}
                    onChange={(e) => setPrecoVenda(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                  <span className="text-[11px] text-slate-500">Valor padrão cobrado no varejo / Instagram</span>
                </div>
              </div>

              {/* Placar de Lucro */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-center text-center space-y-4">
                <div>
                  <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider">Lucro Líquido por Peça</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                    R$ {lucroPorPeca > 0 ? lucroPorPeca : 0},00
                  </div>
                  <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium">
                    Margem bruta de {margemPercentual > 0 ? margemPercentual : 0}%
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider">Vendendo apenas 50 peças/mês:</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono mt-1">
                    R$ {lucroPorPeca > 0 ? (lucroPorPeca * 50).toLocaleString("pt-BR") : 0},00
                  </div>
                  <span className="text-xs text-slate-400">dinheiro limpo no seu caixa</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={scrollToCheckout}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Quero ter acesso a essas margens hoje</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Encontrar na Lista (Categorias) */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Variedade Completa</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Mais de 1.400 Fornecedores Divididos por Nicho
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Você não recebe apenas uma lista jogada. É um catálogo organizado com links diretos para o WhatsApp dos vendedores oficiais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-emerald-500 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded shadow">
                    {cat.margem}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {cat.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cat.nome}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-medium">
                    <span>+100 Fornecedores Verificados</span>
                    <span>Envio Nacional</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona / Passo a Passo */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Simples & Prático</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Como funciona após você garantir seu acesso?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 font-black text-xl flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                1
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Acesso Imediato</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Receba imediatamente no seu WhatsApp e E-mail o link para acessar a plataforma exclusiva com todas as planilhas e contatos organizados.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center relative">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 font-black text-xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                2
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Chame com 1 Clique</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Clique no botão de WhatsApp do fabricante escolhido, solicite o catálogo com fotos profissionais e faça seu pedido direto sem intermediários.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center relative">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 font-black text-xl flex items-center justify-center mx-auto mb-4 border border-sky-500/30">
                3
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Receba e Lucre Alto</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Receba a mercadoria na porta da sua casa ou faça o fornecedor enviar diretamente para seu cliente final pelo modelo dropshipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos & Provas Sociais */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Histórias Reais de Quem Deixou de Pagar Caro
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Veja os resultados de lojistas, sacoleiras e iniciantes que usam os nossos fornecedores validados todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((dep, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "{dep.texto}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <img
                    src={dep.foto}
                    alt={dep.nome}
                    className="w-11 h-11 rounded-full object-cover border border-amber-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{dep.nome}</h4>
                    <p className="text-xs text-slate-400">{dep.cidade}</p>
                    <span className="text-[11px] font-semibold text-emerald-400 block mt-0.5">
                      Faturando: {dep.faturamento}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Métricas de Validação */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 block font-mono">+12.800</span>
              <span className="text-xs text-slate-400 mt-1 block">Alunos & Lojistas Satisfeitos</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 block font-mono">1.400+</span>
              <span className="text-xs text-slate-400 mt-1 block">Fornecedores Diretos</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-sky-400 block font-mono">99.4%</span>
              <span className="text-xs text-slate-400 mt-1 block">Taxa de Aprovação</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 block font-mono">100%</span>
              <span className="text-xs text-slate-400 mt-1 block">Garantia Blindada 7 Dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus Especiais Inclusos */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Presentes Exclusivos Nesta Oferta
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Levando hoje, você ganha 4 Super Bônus Grátis:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/20 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Gift className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded">
                  BÔNUS 1 (Valor: R$ 97,00)
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  Guia Prático: Como Negociar Preços & Frete Grátis
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Scripts e modelos de mensagens prontos para copiar e colar no WhatsApp que garantem descontos adicionais desde o primeiro contato.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/20 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded">
                  BÔNUS 2 (Valor: R$ 67,00)
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  Planilha Automática de Formação de Preço e Lucro
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Basta colocar o custo de fábrica e a planilha calcula impostos, taxas de cartão, frete e seu lucro real automaticamente.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/20 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded">
                  BÔNUS 3 (Valor: R$ 147,00)
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  Mini-Treinamento: Estratégia de Vendas Rápidas no Instagram
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Como montar um perfil magnético, tirar fotos que vendem (sem câmera cara) e fazer seus primeiros R$ 5.000 em 30 dias.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/20 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded">
                  BÔNUS 4 (Valor: Inestimável)
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  Acesso ao Grupo VIP de Atualizações Mensais
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Sempre que um novo polo ou fornecedor matador entra no radar da nossa equipe, ele é adicionado e avisado no grupo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Oferta / Checkout Principal */}
      <section id="oferta-principal" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative scroll-mt-10">
        <div className="max-w-3xl mx-auto px-4">
          {/* Card da Oferta */}
          <div className="relative rounded-3xl bg-slate-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/20 overflow-hidden p-6 sm:p-10">
            {/* Faixa topo */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase px-5 py-1.5 rounded-bl-xl shadow-md">
              75% OFF VÁLIDO HOJE
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20 mb-3">
                <PackageCheck className="w-4 h-4" /> Pacote Completo + Todos os Bônus
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Lista Ouro: 1.400+ Fornecedores Secretos
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
                Acesso imediato e vitalício à base completa de fabricantes diretos de alta lucratividade.
              </p>

              {/* Preço */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="text-slate-400 text-sm line-through block">
                  De R$ 297,00 por apenas:
                </span>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-slate-300 text-lg font-semibold">12x de</span>
                  <span className="text-4xl sm:text-6xl font-black text-amber-400 font-mono">
                    R$ 6,80
                  </span>
                </div>
                <span className="text-slate-300 text-xs sm:text-sm mt-1 block">
                  ou apenas <strong>R$ 67,90 à vista</strong> no PIX ou Cartão (menos de 0,22 centavos por dia!)
                </span>
              </div>

              {/* Benefícios Checklist */}
              <div className="mt-6 text-left max-w-md mx-auto space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso Vitalício à Lista de +1.400 Fabricantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Contatos Diretos de WhatsApp dos Proprietários</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lista Especial de Fornecedores Dropshipping Nacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>4 Super Bônus Inclusos sem custo extra</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atualizações Mensais Gratuitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantia Total Incondicional de 7 Dias</span>
                </div>
              </div>

              {/* Botão de Compra Principal */}
              <div className="mt-8">
                <a
                  href="#checkout"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Redirecionando para o checkout de alta conversão 100% seguro!");
                  }}
                  className="w-full py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:brightness-110 text-slate-950 font-black text-lg sm:text-2xl shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 tracking-wide transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.99] animate-pulse hover:animate-none cursor-pointer"
                >
                  <Lock className="w-6 h-6 stroke-[2.5]" />
                  <span>SIM! QUERO ACESSO IMEDIATO</span>
                </a>
              </div>

              {/* Informações de Segurança */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Pagamento Criptografado 256-bit
                </span>
                <span>•</span>
                <span>Liberação Automática via PIX e Cartão</span>
                <span>•</span>
                <span>Sem Mensalidades Futuras</span>
              </div>
            </div>
          </div>

          {/* Box de Garantia */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Garantia Blindada de 7 Dias: Teste sem nenhum risco!</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Adquira a lista agora, navegue por todos os fornecedores e mande mensagem para eles. Se por qualquer motivo você não gostar ou achar que não serviu para o seu negócio, basta nos enviar um e-mail em até 7 dias e devolveremos 100% do seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ (Perguntas Frequentes) */}
      <section className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Dúvidas Comuns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 font-semibold text-sm sm:text-base text-white flex items-center justify-between gap-4 cursor-pointer hover:text-amber-300"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={scrollToCheckout}
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <span>GARANTIR MINHA VAGA COM DESCONTO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Notificação Flutuante de Compra Recente */}
      {recentBuyer && (
        <div className="fixed bottom-4 left-4 z-40 max-w-xs p-3 rounded-xl bg-slate-900/95 border border-emerald-500/40 shadow-2xl backdrop-blur flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">
            ✓
          </div>
          <div className="text-xs">
            <p className="text-white font-medium">
              <strong className="text-emerald-400">{recentBuyer.name}</strong> acabou de adquirir a Lista Ouro
            </p>
            <p className="text-slate-400 text-[11px] mt-0.5">
              {recentBuyer.city} • {recentBuyer.time}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-10 bg-slate-950 border-t border-slate-900 text-slate-500 text-xs text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="leading-relaxed">
            AVISO LEGAL: Os resultados podem variar de pessoa para pessoa. Não garantimos ganhos financeiros fixos; seus lucros dependem da sua dedicação, precificação e esforço comercial. Todos os fornecedores listados são empresas legalmente estabelecidas e independentes deste site.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400">
            <a href="#termos" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#privacidade" className="hover:text-amber-400 transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#suporte" className="hover:text-amber-400 transition-colors">Atendimento & Suporte</a>
          </div>
          <p className="text-slate-600">
            © {new Date().getFullYear()} Lista Ouro dos Fornecedores Secretos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
