/**
 * MINA D'ÁGUA — A HISTÓRIA DE UM POVO
 * Favela Santa Marta · Botafogo · Rio de Janeiro
 * Scripts da Landing Page Documental
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initMobileNav();
  initVideoCarousel();
  initMapInteractions();
  initFlyerModal();
  initAmbientAudio();
  initIntersectionAnimations();
  initCaixaPhotoAnimations();
});

/* ==========================================================================
   1. EFEITOS DE ROLAGEM E HEADER
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scrollProgressBar');
  const siteHeader = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Atualiza barra de progresso
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Header fixo com fundo sólido
    if (siteHeader) {
      if (scrollTop > 60) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Atualiza link de navegação ativo
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   2. MENU MOBILE
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const headerNav = document.getElementById('headerNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !headerNav) return;

  toggleBtn.addEventListener('click', () => {
    headerNav.classList.toggle('open');
    const isOpen = headerNav.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em qualquer link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   3. CARROSSEL AUDIOVISUAL (SEÇÃO 04: CINCO HISTÓRIAS)
   ========================================================================== */
function initVideoCarousel() {
  // Lista com as 5 histórias e os vídeos oficiais do YouTube
  const stories = [
    {
      id: 't3DAcW3w9_M',
      start: 0,
      badge: 'Personagem 01 · Itamar Silva',
      counter: '01/05',
      leftHeadline: 'A fila da bica como primeira assembleia do morro',
      leftSynopsis: 'Itamar Silva narra como a falta de água unia as pessoas na comunidade e transformou a mina natural no epicentro da convivência diária: na espera com as latas na cabeça, nasceram os primeiros laços de luta e o embrião do Grupo ECO.',
      rightTitle: 'O Som do Canecão na Pedra',
      rightDesc: 'Era comum o som do canecão, feito de lata vazia de óleo ou de leite em pó, raspando o buraco de pedra em formato de cuia para encher uma lata de vinte ou de quinze litros carregadas até as casas.'
    },
    {
      id: 'kp_AgLDGleg',
      start: 32,
      badge: 'Personagem 02 · Memória Oral',
      counter: '02/05',
      leftHeadline: 'Lugares de memória que afirmam nossa identidade',
      leftSynopsis: 'Aqueles que já nasceram na Favela com água e luz e, também, os visitantes de hoje, precisam conhecer a nossa história e as nossas referências locais. Esse é o nosso jeito de afirmar nossa identidade e valorizar um lugar que é nosso.',
      rightTitle: 'As Madrugadas de Espera',
      rightDesc: 'No verão, as fontes minguavam e a disputa para conseguir uma lata de água era dramática. A fila na Mina se estendia até a madrugada, forjando laços de vizinhança inabaláveis.'
    },
    {
      id: 'sWM_8RJVY0k',
      start: 7,
      badge: 'Personagem 03 · Vida Coletiva',
      counter: '03/05',
      leftHeadline: 'A nascente que ensinou a dividir e carregar junto',
      leftSynopsis: 'A mina não dava apenas água. Ela ensinava a dividir, a esperar a vez do vizinho, a carregar junto. Foi carregando água que aprendemos a carregar o destino da nossa própria comunidade.',
      rightTitle: 'Solidariedade Forjada na Sede',
      rightDesc: 'Antes dos canos e do asfalto, havia a sede e havia a floresta. No coração da rocha do Morro Santa Marta brotou a mina que sustentou famílias e deu origem à Associação Escola Sem Muros.'
    },
    {
      id: 'Vl1QlAq7EVs',
      start: 12,
      badge: 'Personagem 04 · Praça das Lavadeiras',
      counter: '04/05',
      leftHeadline: 'As mulheres e o coração da convivência',
      leftSynopsis: 'A primeira Mina, que fica perto da padaria da Grazi, foi durante muitos anos lugar de encontro. As mulheres lá iam para lavar roupa, louça e panelas; os homens iam tomar banho e as crianças apanhavam água.',
      rightTitle: 'A Praça das Lavadeiras',
      rightDesc: 'Mesmo com a água encanada chegando às casas, o espaço segue sendo a Praça das Lavadeiras. O filete de água continua correndo e continua a ser lugar de acolhimento e partilha.'
    },
    {
      id: 'WsQBW4_Qov0',
      start: 4,
      badge: 'Personagem 05 · Raízes e Continuidade',
      counter: '05/05',
      leftHeadline: 'Histórias de assombração e afeto infantil',
      leftSynopsis: 'Naquela época não havia iluminação pública e os caminhos eram muito escuros. Histórias como a mulher do latão, a mulher de branco e o lobisomem viraram lenda na favela, enquanto as crianças aprendiam a amar o morro.',
      rightTitle: 'O Fio Cristalino da Memória',
      rightDesc: 'Da Mina jorra, sem parar, a água boa para beber e a água cristalina da nossa memória. Um patrimônio cultural intangível que segue vivo nas lembranças de todas as gerações.'
    }
  ];

  let currentIndex = 0;
  const iframe = document.getElementById('mainVideoIframe');
  const counterEl = document.getElementById('playerVideoCounter');
  const badgeEl = document.getElementById('playerDocBadge');
  const leftHeadlineEl = document.getElementById('carouselLeftHeadline');
  const leftSynopsisEl = document.getElementById('carouselLeftSynopsis');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const dots = document.querySelectorAll('.carousel-dot');
  const thumbCards = document.querySelectorAll('.thumb-card');
  const carouselStage = document.getElementById('carouselEditorialStage');

  function updateVideo(index, userInitiated = false) {
    if (index < 0) index = stories.length - 1;
    if (index >= stories.length) index = 0;
    currentIndex = index;

    const story = stories[currentIndex];

    // Atualiza iframe com embed seguro do YouTube respeitando start time informado
    const embedUrl = `https://www.youtube-nocookie.com/embed/${story.id}?start=${story.start}&rel=0&modestbranding=1`;
    if (iframe && iframe.src !== embedUrl) {
      iframe.src = embedUrl;
    }

    // Atualiza textos (apenas coluna esquerda)
    if (counterEl) counterEl.textContent = story.counter;
    if (badgeEl) badgeEl.innerHTML = `<span class="badge-dot"></span> ${story.badge}`;
    if (leftHeadlineEl) leftHeadlineEl.textContent = story.leftHeadline;
    if (leftSynopsisEl) leftSynopsisEl.textContent = story.leftSynopsis;

    // Atualiza indicadores (dots)
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      dot.setAttribute('aria-selected', i === currentIndex);
    });

    // Atualiza miniaturas
    thumbCards.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateVideo(currentIndex - 1, true));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateVideo(currentIndex + 1, true));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      updateVideo(idx, true);
    });
  });

  thumbCards.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-index'), 10);
      updateVideo(idx, true);
    });
  });

  // Navegação por teclado (Setas Esquerda / Direita) quando o carrossel está na visão
  window.addEventListener('keydown', (e) => {
    if (carouselStage) {
      const rect = carouselStage.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (e.key === 'ArrowLeft') {
          updateVideo(currentIndex - 1, true);
        } else if (e.key === 'ArrowRight') {
          updateVideo(currentIndex + 1, true);
        }
      }
    }
  });

  // Navegação por toque e arraste (touch swipe) no mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (carouselStage) {
    carouselStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselStage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    }, { passive: true });
  }

  function handleGesture() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        // Swipe para esquerda -> próximo
        updateVideo(currentIndex + 1, true);
      } else {
        // Swipe para direita -> anterior
        updateVideo(currentIndex - 1, true);
      }
    }
  }

  // Inicializa com o primeiro vídeo
  updateVideo(0);
}

/* ==========================================================================
   4. MAPA MURAL & VISUALIZADOR TERRITORIAL
   ========================================================================== */
function initMapInteractions() {
  const mapImg = document.getElementById('mapViewportImg');
  const mapPin = document.getElementById('mapPinHotspot');
  const viewLocalBtn = document.getElementById('viewLocalBtn');
  const viewAmploBtn = document.getElementById('viewAmploBtn');
  const viewDentroBtn = document.getElementById('viewDentroBtn');
  const mapInfoCard = document.getElementById('mapInfoCard');

  if (!mapImg) return;

  const views = {
    amplo: {
      src: 'assets/images/mapa3.png',
      alt: 'Vista aérea panorâmica da Zona Sul do Rio de Janeiro destacando Botafogo e o Morro Santa Marta',
      pinTop: '46%',
      pinLeft: 'calc(50.5% + 40px)',
      pinLabel: 'Favela Santa Marta',
      title: 'Contexto Metropolitano · Botafogo',
      desc: 'Entre o Maciço da Tijuca e a enseada de Botafogo, o Morro Santa Marta ergue-se com sua história secular e sua nascente que há gerações abastece os moradores.'
    },
    local: {
      src: 'assets/images/mapa4.png',
      alt: 'Vista aérea local do Morro Santa Marta cercado pela vegetação e pela comunidade',
      pinTop: '38%',
      pinLeft: 'calc(45.5% + 15px)',
      pinLabel: 'Favela Santa Marta',
      title: 'Praça da Mina · Santa Marta',
      desc: 'Localizada no miolo da encosta, próxima à Padaria da Grazi e à Praça das Lavadeiras. A nascente natural corre da rocha florestal do morro em direção à comunidade.'
    },
    dentro: {
      src: 'assets/images/mapa5.png',
      alt: 'Vista aérea de perto da comunidade no interior do Morro Santa Marta',
      pinTop: 'calc(50% + 105px)',
      pinLeft: 'calc(50% - 145px)',
      pinLabel: '',
      title: 'Dentro do Morro · Santa Marta',
      desc: 'Uma vista próxima da comunidade e de suas construções entre as áreas de mata do Morro Santa Marta.'
    }
  };

  function setMapView(viewKey) {
    const v = views[viewKey];
    if (!v) return;

    mapImg.style.opacity = '0';
    setTimeout(() => {
      mapImg.src = v.src;
      mapImg.alt = v.alt;
      mapImg.style.opacity = '1';

      if (mapPin) {
        mapPin.style.top = v.pinTop;
        mapPin.style.left = v.pinLeft;
        const pinLabel = mapPin.querySelector('.pin-label-tag');
        if (pinLabel) {
          pinLabel.textContent = v.pinLabel;
          pinLabel.hidden = !v.pinLabel;
        }
        mapPin.setAttribute('aria-label', v.pinLabel ? `Marcador: ${v.pinLabel}` : 'Marcador de localização no Morro Santa Marta');
      }

      if (mapInfoCard) {
        const titleEl = mapInfoCard.querySelector('.map-card-title');
        const descEl = mapInfoCard.querySelector('.map-card-text');
        if (titleEl) titleEl.textContent = v.title;
        if (descEl) descEl.textContent = v.desc;
      }
    }, 250);

    viewLocalBtn?.classList.toggle('active', viewKey === 'local');
    viewAmploBtn?.classList.toggle('active', viewKey === 'amplo');
    viewDentroBtn?.classList.toggle('active', viewKey === 'dentro');
  }

  if (viewLocalBtn) {
    viewLocalBtn.addEventListener('click', () => setMapView('local'));
  }
  if (viewAmploBtn) {
    viewAmploBtn.addEventListener('click', () => setMapView('amplo'));
  }
  if (viewDentroBtn) {
    viewDentroBtn.addEventListener('click', () => setMapView('dentro'));
  }

  if (mapPin && mapInfoCard) {
    mapPin.addEventListener('click', () => {
      mapInfoCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      mapInfoCard.style.boxShadow = '0 0 25px rgba(218, 184, 167, 0.7)';
      setTimeout(() => {
        mapInfoCard.style.boxShadow = '';
      }, 1500);
    });
  }
}

/* ==========================================================================
   5. MODAL / LIGHTBOX PARA OS DOCUMENTOS HISTÓRICOS (FLYERS)
   ========================================================================== */
function initFlyerModal() {
  const modal = document.getElementById('flyerModal');
  const closeBtn = document.getElementById('flyerModalClose');
  const openButtons = document.querySelectorAll('.btn-open-flyer');
  const modalImg = document.getElementById('flyerModalImg');
  const modalTitle = document.getElementById('flyerModalTitle');
  const tabFlyer1 = document.getElementById('tabFlyer1');
  const tabFlyer2 = document.getElementById('tabFlyer2');

  const flyers = {
    flyer1: {
      src: 'assets/images/flyer1.png',
      title: 'Flyer Histórico 01 — Mapa Muro / Mina d\'Água Fonte da Vida',
      alt: 'Documento original Flyer 1: Mapa Muro, Mina D\'Água - Fonte da Vida'
    },
    flyer2: {
      src: 'assets/images/flyer2.jpg',
      title: 'Flyer Histórico 02 — Introdução & Memória do Santa Marta',
      alt: 'Documento original Flyer 2: Intro e História da Mina d\'Água'
    }
  };

  function openFlyer(key) {
    if (!flyers[key]) key = 'flyer1';
    const f = flyers[key];

    if (modalImg) {
      modalImg.src = f.src;
      modalImg.alt = f.alt;
    }
    if (modalTitle) {
      modalTitle.textContent = f.title;
    }

    if (tabFlyer1 && tabFlyer2) {
      tabFlyer1.classList.toggle('active', key === 'flyer1');
      tabFlyer2.classList.toggle('active', key === 'flyer2');
    }

    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-flyer') || 'flyer1';
      openFlyer(target);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (tabFlyer1) tabFlyer1.addEventListener('click', () => openFlyer('flyer1'));
  if (tabFlyer2) tabFlyer2.addEventListener('click', () => openFlyer('flyer2'));

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. ÁUDIO AMBIENTE SINTETIZADO (SOM DA NASCENTE VIA WEB AUDIO API)
   ========================================================================== */
function initAmbientAudio() {
  const audioBtn = document.getElementById('audioToggleBtn');
  if (!audioBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let noiseNode = null;
  let gainNode = null;
  let filter1 = null;
  let filter2 = null;

  function createWaterSound() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Cria gerador de ruído rosa suave filtrado (simulando água corrente e gotejamento)
    const bufferSize = 2 * audioCtx.sampleRate;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
      b6 = white * 0.115926;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    // Filtro Passa-Faixa para som de água cristalina
    filter1 = audioCtx.createBiquadFilter();
    filter1.type = 'bandpass';
    filter1.frequency.value = 650;
    filter1.Q.value = 1.2;

    filter2 = audioCtx.createBiquadFilter();
    filter2.type = 'lowpass';
    filter2.frequency.value = 1400;

    // Ganho suave e gradual
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 1.5);

    noiseNode.connect(filter1);
    filter1.connect(filter2);
    filter2.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
  }

  function stopWaterSound() {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        if (noiseNode) {
          try { noiseNode.stop(); } catch (err) {}
          noiseNode.disconnect();
        }
        if (audioCtx && audioCtx.state !== 'closed') {
          audioCtx.close();
        }
      }, 850);
    }
  }

  audioBtn.addEventListener('click', () => {
    if (!isPlaying) {
      try {
        createWaterSound();
        isPlaying = true;
        audioBtn.classList.add('playing');
        audioBtn.setAttribute('aria-pressed', 'true');
        const textSpan = audioBtn.querySelector('.audio-btn-text');
        if (textSpan) textSpan.textContent = 'Pausar Som';
      } catch (e) {
        console.warn('Web Audio não suportado ou bloqueado:', e);
      }
    } else {
      stopWaterSound();
      isPlaying = false;
      audioBtn.classList.remove('playing');
      audioBtn.setAttribute('aria-pressed', 'false');
      const textSpan = audioBtn.querySelector('.audio-btn-text');
      if (textSpan) textSpan.textContent = 'Som da Água';
    }
  });
}

/* ==========================================================================
   7. ANIMAÇÕES DE ENTRADA SUAVES (INTERSECTION OBSERVER — Elementos Gerais)
   ========================================================================== */
function initIntersectionAnimations() {
  // Exclui .caixa-main-frame, .caixa-inset-frame e .trans-card daqui —
  // eles são gerenciados pelo initCaixaPhotoAnimations específico abaixo.
  const animatedElements = document.querySelectorAll(
    '.section-title, .section-subtitle, .memoria-quote, .editorial-photo-card, .editorial-quote-block, .map-canvas-container, .flyer-quote-pill'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.classList.contains('editorial-quote-block')
          ? 'translateX(0)'
          : 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = el.classList.contains('editorial-quote-block')
      ? 'translateX(48px)'
      : 'translateY(24px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}

/* ==========================================================================
   8. ANIMAÇÕES CINEMATOGRÁFICAS — SEÇÃO CAIXA DE PEDRA
   ========================================================================== */
function initCaixaPhotoAnimations() {
  const caixaSection   = document.getElementById('caixa-pedra');
  const visualCol      = caixaSection ? caixaSection.querySelector('.caixa-visual-col') : null;
  const insetFrame     = caixaSection ? caixaSection.querySelector('.caixa-inset-frame') : null;

  if (!caixaSection || !visualCol) return;

  // Lightbox simplificado para o inset (clique na foto menor abre ampliada)
  if (insetFrame) {
    insetFrame.setAttribute('title', 'Clique para ampliar a fotografia');
    insetFrame.style.cursor = 'zoom-in';

    insetFrame.addEventListener('click', () => {
      openCaixaLightbox(insetFrame.querySelector('img'));
    });
  }

  // IntersectionObserver: dispara quando a seção entra ~25% na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Fase 1 — Coluna visual (fotos)
      visualCol.classList.add('caixa-animate');

      // Fase 2 — Section recebe classe para animar os cards de texto
      //           com um pequeno delay relativo à entrada da foto
      setTimeout(() => {
        caixaSection.classList.add('caixa-animate');
      }, 300);

      // Parallax suave na foto principal durante a rolagem
      window.addEventListener('scroll', onCaixaParallax, { passive: true });

      observer.disconnect();
    });
  }, {
    threshold: 0.22,
    rootMargin: '0px 0px -60px 0px'
  });

  observer.observe(caixaSection);

  /* Efeito parallax leve: a foto principal move-se levemente enquanto o
     usuário rola, dando profundidade cinematográfica à composição.      */
  function onCaixaParallax() {
    const mainImg = caixaSection.querySelector('.caixa-main-frame img');
    if (!mainImg) return;

    const rect  = caixaSection.getBoundingClientRect();
    const vh    = window.innerHeight;

    // Apenas calcula quando a seção está visível
    if (rect.bottom < 0 || rect.top > vh) return;

    // Fator de deslocamento: centro da seção em relação ao centro da tela
    const progress  = (rect.top + rect.height / 2 - vh / 2) / (vh * 0.9);
    const offsetY   = Math.min(Math.max(progress * 18, -18), 18); // ± 18px

    mainImg.style.transform = `scale(1.06) translateY(${offsetY}px)`;
  }

  /* Lightbox leve para ampliar a foto do inset ao clique */
  function openCaixaLightbox(img) {
    if (!img) return;

    const backdrop = document.createElement('div');
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-label', 'Fotografia ampliada da Mina d\'Água');
    Object.assign(backdrop.style, {
      position:       'fixed',
      inset:          '0',
      zIndex:         '30000',
      background:     'rgba(10, 11, 8, 0.96)',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '2rem',
      cursor:         'zoom-out',
      animation:      'caixaLightboxIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
    });

    const picture = document.createElement('img');
    picture.src = img.src;
    picture.alt = img.alt || 'Fotografia da Mina d\'Água do Santa Marta';
    Object.assign(picture.style, {
      maxWidth:   '90vw',
      maxHeight:  '88vh',
      objectFit:  'contain',
      borderRadius: '6px',
      border:     '1px solid rgba(218, 184, 167, 0.4)',
      boxShadow:  '0 30px 80px rgba(0,0,0,0.9)',
      animation:  'caixaLightboxImgIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s both'
    });

    const closeHint = document.createElement('div');
    closeHint.textContent = 'ESC ou clique para fechar';
    Object.assign(closeHint.style, {
      position:   'absolute',
      bottom:     '1.5rem',
      left:       '50%',
      transform:  'translateX(-50%)',
      fontFamily: 'var(--font-display, Montserrat, sans-serif)',
      fontSize:   '0.72rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color:      'rgba(218, 184, 167, 0.7)'
    });

    backdrop.appendChild(picture);
    backdrop.appendChild(closeHint);
    document.body.appendChild(backdrop);
    document.body.style.overflow = 'hidden';

    function closeLightbox() {
      document.body.removeChild(backdrop);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
      if (e.key === 'Escape') closeLightbox();
    }

    backdrop.addEventListener('click', closeLightbox);
    window.addEventListener('keydown', onKey);
  }
}

