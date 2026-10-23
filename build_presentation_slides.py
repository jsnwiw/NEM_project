import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def build_presentation(filename="대한민국_인프라_소외지역_분석_발표자료.pptx"):
    prs = Presentation()
    # 16:9 Widescreen setting
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Color Palette
    C_DARK_BG = RGBColor(15, 23, 42)      # #0f172a (Deep Slate)
    C_CARD_BG = RGBColor(30, 41, 59)      # #1e293b
    C_CARD_LIGHT = RGBColor(248, 250, 252) # #f8fafc
    C_CARD_BORDER = RGBColor(226, 232, 240)
    C_PRIMARY_BLUE = RGBColor(0, 122, 255) # Apple Blue
    C_CYAN = RGBColor(14, 165, 233)        # Sky/Cyan
    C_EMERALD = RGBColor(16, 185, 129)     # Green
    C_RED = RGBColor(239, 68, 68)          # Warning Red
    C_AMBER = RGBColor(245, 158, 11)       # Amber
    C_PURPLE = RGBColor(139, 92, 246)      # Purple
    C_WHITE = RGBColor(255, 255, 255)
    C_GRAY_TEXT = RGBColor(100, 116, 139)
    C_DARK_TEXT = RGBColor(30, 41, 59)

    def add_header(slide, category_text, title_text, dark_mode=False):
        # Category badge
        cat_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.5), Inches(11.7), Inches(0.4))
        tf_cat = cat_box.text_frame
        tf_cat.word_wrap = True
        p_cat = tf_cat.paragraphs[0]
        p_cat.text = category_text.upper()
        p_cat.font.size = Pt(11)
        p_cat.font.bold = True
        p_cat.font.color.rgb = C_CYAN if dark_mode else C_PRIMARY_BLUE

        # Main Title
        title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.85), Inches(11.7), Inches(0.8))
        tf_title = title_box.text_frame
        tf_title.word_wrap = True
        p_title = tf_title.paragraphs[0]
        p_title.text = title_text
        p_title.font.size = Pt(24)
        p_title.font.bold = True
        p_title.font.color.rgb = C_WHITE if dark_mode else C_DARK_TEXT

    # ==========================================================
    # SLIDE 1: Title Slide (Dark Hero Style)
    # ==========================================================
    s1 = prs.slides.add_slide(blank_layout)
    bg1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = C_DARK_BG
    bg1.line.color.rgb = C_DARK_BG

    # Subtitle Badge
    badge = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.0), Inches(1.8), Inches(4.2), Inches(0.45))
    badge.fill.solid()
    badge.fill.fore_color.rgb = RGBColor(30, 58, 138)
    badge.line.color.rgb = C_CYAN
    tf_b = badge.text_frame
    p_b = tf_b.paragraphs[0]
    p_b.text = "🛰️ 초고화질 위성 Web GIS & AI 음성 시연"
    p_b.font.size = Pt(12)
    p_b.font.bold = True
    p_b.font.color.rgb = C_CYAN
    p_b.alignment = PP_ALIGN.CENTER

    # Main Title
    t_box = s1.shapes.add_textbox(Inches(1.0), Inches(2.4), Inches(11.3), Inches(2.2))
    tf = t_box.text_frame
    tf.word_wrap = True
    p1 = tf.paragraphs[0]
    p1.text = "대한민국 인프라 소외지역\n실시간 정밀 분석 지도"
    p1.font.size = Pt(40)
    p1.font.bold = True
    p1.font.color.rgb = C_WHITE

    p2 = tf.add_paragraph()
    p2.text = "전국 229개 전 지자체 13대 핵심 인프라 결핍 진단 및 Typecast TTS 자동화 플랫폼"
    p2.font.size = Pt(17)
    p2.font.color.rgb = RGBColor(148, 163, 184)
    p2.space_before = Pt(18)

    # Info cards at bottom of title slide
    features = [
        ("📍 전국 229개소 전수 진단", "17개 광역시도 및 주요 도서 전수 검색"),
        ("📊 13대 핵심 결핍 지표", "응급의료·교통·난방·소멸위험 등 정밀 연동"),
        ("🔊 Typecast AI TTS", "발표 음성 실시간 합성 및 자막 싱크")
    ]
    for i, (f_title, f_desc) in enumerate(features):
        x = Inches(1.0 + i * 3.9)
        c = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, Inches(5.1), Inches(3.6), Inches(1.4))
        c.fill.solid()
        c.fill.fore_color.rgb = C_CARD_BG
        c.line.color.rgb = RGBColor(51, 65, 85)
        ctf = c.text_frame
        ctf.word_wrap = True
        cp1 = ctf.paragraphs[0]
        cp1.text = f_title
        cp1.font.size = Pt(14)
        cp1.font.bold = True
        cp1.font.color.rgb = C_WHITE
        cp2 = ctf.add_paragraph()
        cp2.text = f_desc
        cp2.font.size = Pt(11)
        cp2.font.color.rgb = RGBColor(148, 163, 184)
        cp2.space_before = Pt(6)

    # ==========================================================
    # SLIDE 2: 기획 배경 및 문제 정의
    # ==========================================================
    s2 = prs.slides.add_slide(blank_layout)
    add_header(s2, "01. Background & Problem", "지역 간 심화되는 인프라 불균형과 사각지대 문제")

    probs = [
        ("🚨 응급의료 골든타임 결핍", "수도권 3분 vs 소외지역 54분\n전국 18대 취약지구 내 중증 외상 및 응급 수술 가능 병원 부재로 인한 생명 직결 위협", C_RED),
        ("📉 지방소멸 고위험 가속화", "평균 소멸위험지수 0.14\n청년층 유출과 고령화 심화, 분만 산부인과 0개 시군구 증가로 인구 절벽 직면", C_AMBER),
        ("⚡ 필수 생활 에너지/교통 격차", "도시가스 보급률 14.2% vs 91%\n버스 배차 110분 vs 수도권 9분, 대중교통 및 난방 인프라의 심각한 구조적 소외", C_PRIMARY_BLUE)
    ]
    for i, (title, desc, color) in enumerate(probs):
        x = Inches(0.8 + i * 3.95)
        box = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, Inches(2.0), Inches(3.7), Inches(4.7))
        box.fill.solid()
        box.fill.fore_color.rgb = C_CARD_LIGHT
        box.line.color.rgb = color
        box.line.width = Pt(2)
        btf = box.text_frame
        btf.word_wrap = True
        
        bp1 = btf.paragraphs[0]
        bp1.text = title
        bp1.font.size = Pt(16)
        bp1.font.bold = True
        bp1.font.color.rgb = color

        bp2 = btf.add_paragraph()
        bp2.text = desc
        bp2.font.size = Pt(13)
        bp2.font.color.rgb = C_DARK_TEXT
        bp2.space_before = Pt(16)

    # ==========================================================
    # SLIDE 3: 서비스 핵심 목표 및 솔루션
    # ==========================================================
    s3 = prs.slides.add_slide(blank_layout)
    add_header(s3, "02. Core Goal & Solution", "데이터 기반의 직관적 Web GIS 진단 플랫폼 구축")

    solutions = [
        ("🌐 전수 조사 & 정밀 매핑", "229개 시·군·구 및 18대 취약지구 전수 데이터베이스 구축\n초성·지명 자동완성 및 실시간 26km 권역 버퍼 투사"),
        ("📊 13대 지표 통합 분석 패널", "응급, 소방, 교육, 교통, 일자리, 소멸위험 등\n다차원 인프라 데이터를 한눈에 파악하는 직관적 진단 UI"),
        ("🛰️ 고해상도 위성 지도 & UX", "Esri 위성 지도 + 한글 지명 레이어 상시 탑재\niOS 글래스모피즘 디자인 및 모바일 뷰 스위처 완벽 지원"),
        ("🔊 AI 음성 해설 & 브리핑", "Typecast REST API 연동을 통한 브리핑 자동 음성 합성\n음성 재생 싱크 자막 및 원클릭 자동 시연 제공")
    ]
    for i, (stitle, sdesc) in enumerate(solutions):
        row = i // 2
        col = i % 2
        x = Inches(0.8 + col * 5.95)
        y = Inches(2.0 + row * 2.5)
        box = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, Inches(5.7), Inches(2.2))
        box.fill.solid()
        box.fill.fore_color.rgb = C_CARD_LIGHT
        box.line.color.rgb = C_CARD_BORDER
        btf = box.text_frame
        btf.word_wrap = True

        bp1 = btf.paragraphs[0]
        bp1.text = stitle
        bp1.font.size = Pt(15)
        bp1.font.bold = True
        bp1.font.color.rgb = C_PRIMARY_BLUE

        bp2 = btf.add_paragraph()
        bp2.text = sdesc
        bp2.font.size = Pt(12)
        bp2.font.color.rgb = C_DARK_TEXT
        bp2.space_before = Pt(8)

    # ==========================================================
    # SLIDE 4: 13대 핵심 인프라 결핍 진단 체계
    # ==========================================================
    s4 = prs.slides.add_slide(blank_layout)
    add_header(s4, "03. 13 Infrastructure Indicators", "국토 균형발전을 위한 13대 핵심 진단 지표")

    categories = [
        ("🏥 보건·안전 인프라", [
            "🚨 응급의료: 30km 권역외상·응급수술 가능 병원",
            "🚒 소방/안전: 119 안전센터 7분 골든타임 도달률",
            "🏠 복지/돌봄: 독거노인·취약계층 맞춤 돌봄 인력"
        ], C_RED),
        ("🚆 생활·기반 인프라", [
            "🚆 교통/철도: 광역철도·지하철 및 버스 배차간격",
            "⚡ 에너지/난방: 도시가스(LNG) 배관 공급망",
            "💧 상수도/물: 광역·지방 상수도 보급률",
            "🛒 생활/상권: 대형마트·전통시장 종합 상권"
        ], C_PRIMARY_BLUE),
        ("🌱 성장·미래 인프라", [
            "📚 교육: 학령인구 추이 및 학교/도서관 인프라",
            "🎭 문화/체육: 공연장·영화관·체육시설 보급",
            "📡 통신/디지털: 5G 커버리지 및 통신 음영 해소",
            "💼 일자리/산업: 산업단지 및 양질의 청년 일자리",
            "🌲 환경/생태: 녹지율 및 환경 정비 지표",
            "📉 소멸위험: 실시간 인구소멸위험지수 산출"
        ], C_EMERALD)
    ]
    for i, (cat_name, items, cat_col) in enumerate(categories):
        x = Inches(0.8 + i * 3.95)
        box = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, Inches(2.0), Inches(3.7), Inches(4.8))
        box.fill.solid()
        box.fill.fore_color.rgb = C_CARD_LIGHT
        box.line.color.rgb = cat_col
        box.line.width = Pt(1.5)
        btf = box.text_frame
        btf.word_wrap = True

        bp = btf.paragraphs[0]
        bp.text = cat_name
        bp.font.size = Pt(15)
        bp.font.bold = True
        bp.font.color.rgb = cat_col

        for item in items:
            p = btf.add_paragraph()
            p.text = item
            p.font.size = Pt(11)
            p.font.color.rgb = C_DARK_TEXT
            p.space_before = Pt(8)

    # ==========================================================
    # SLIDE 5: 시스템 구조 및 기술 스택
    # ==========================================================
    s5 = prs.slides.add_slide(blank_layout)
    add_header(s5, "04. Architecture & Tech Stack", "경량화된 고성능 클라이언트 중심 Web GIS 아키텍처")

    tech_blocks = [
        ("GIS & Visualization", "Leaflet.js + MarkerCluster", "초고속 인터랙티브 지도 렌더링, 핀 클러스터링으로 수백 개 마커 겹침 방지 및 26km/30km 동적 반경 버퍼 투사"),
        ("Satellite BaseMap", "Esri World Imagery + Labels", "초고화질 위성 타일 베이스맵과 한국어 지명 라벨을 상시 가동하여 직관적인 지형·행정 식별 지원"),
        ("Frontend & UI", "Vanilla JS + Glassmorphism", "프레임워크 종속 없는 초경량 구동, Apple iOS 스타일 글래스모피즘 및 반응형 뷰 스위처(모바일/태블릿) 탑재"),
        ("AI Voice & Media", "Typecast REST API", "비동기 음성 합성 호출, Base64 바이너리 오디오 변환 및 실시간 싱크 자막 연동")
    ]
    for i, (category, headline, desc) in enumerate(tech_blocks):
        x = Inches(0.8 + i * 2.95)
        box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, Inches(2.0), Inches(2.75), Inches(4.7))
        box.fill.solid()
        box.fill.fore_color.rgb = C_CARD_LIGHT
        box.line.color.rgb = C_PRIMARY_BLUE
        box.line.width = Pt(1.5)
        btf = box.text_frame
        btf.word_wrap = True

        bp1 = btf.paragraphs[0]
        bp1.text = category
        bp1.font.size = Pt(11)
        bp1.font.bold = True
        bp1.font.color.rgb = C_CYAN

        bp2 = btf.add_paragraph()
        bp2.text = headline
        bp2.font.size = Pt(15)
        bp2.font.bold = True
        bp2.font.color.rgb = C_DARK_TEXT
        bp2.space_before = Pt(6)

        bp3 = btf.add_paragraph()
        bp3.text = desc
        bp3.font.size = Pt(11)
        bp3.font.color.rgb = C_GRAY_TEXT
        bp3.space_before = Pt(12)

    # ==========================================================
    # SLIDE 6: Typecast AI TTS 음성 시연 및 자막 기능
    # ==========================================================
    s6 = prs.slides.add_slide(blank_layout)
    add_header(s6, "05. AI Voice & Narration", "Typecast AI TTS를 활용한 실시간 음성 브리핑 시스템")

    f_left = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(2.0), Inches(5.7), Inches(4.7))
    f_left.fill.solid()
    f_left.fill.fore_color.rgb = C_CARD_LIGHT
    f_left.line.color.rgb = C_CARD_BORDER
    ltf = f_left.text_frame
    ltf.word_wrap = True

    lp1 = ltf.paragraphs[0]
    lp1.text = "🎙️ 발표 음성 브리핑 시스템 특징"
    lp1.font.size = Pt(16)
    lp1.font.bold = True
    lp1.font.color.rgb = C_PRIMARY_BLUE

    steps = [
        "1. 원클릭 발표 모달 : '📢 발표 듣기' 클릭 시 자동 팝업",
        "2. AI 성우 모델 : ssfm-v30 최신 고음질 한국어 모델 연동",
        "3. 실시간 자막(Caption) 싱크 : 음성 출력과 텍스트 동시 제공",
        "4. 자동 시연(Demo) 지원 : 상단 바에서 인프라 브리핑 즉시 청취",
        "5. 유연한 확장성 : 13대 지표별 맞춤 오디오 가이드 생성 가능"
    ]
    for s in steps:
        p = ltf.add_paragraph()
        p.text = s
        p.font.size = Pt(12)
        p.font.color.rgb = C_DARK_TEXT
        p.space_before = Pt(12)

    f_right = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(2.0), Inches(5.7), Inches(4.7))
    f_right.fill.solid()
    f_right.fill.fore_color.rgb = C_DARK_BG
    f_right.line.color.rgb = RGBColor(51, 65, 85)
    rtf = f_right.text_frame
    rtf.word_wrap = True

    rp1 = rtf.paragraphs[0]
    rp1.text = "📝 실제 발표 텍스트 (TTS 대본)"
    rp1.font.size = Pt(16)
    rp1.font.bold = True
    rp1.font.color.rgb = C_CYAN

    rp2 = rtf.add_paragraph()
    rp2.text = "\"안녕하세요. 이번 발표에서는 대한민국 인프라 소외지역 분석 지도의 주요 기능과 데이터 분석 결과를 소개합니다.\n\n• 전국 18대 인프라(에너지, 교통, 금융 등) 실시간 상황 시각화\n• 위성 고해상도 이미지와 행정구역 검색 기능 제공\n• 사용자 맞춤 레이어 토글 및 위험 영역 자동 표시\""
    rp2.font.size = Pt(13)
    rp2.font.color.rgb = C_WHITE
    rp2.space_before = Pt(16)

    rp3 = rtf.add_paragraph()
    rp3.text = "🔊 상태: 재생 중 자막 활성화 → 재생 완료 시 자동 닫힘"
    rp3.font.size = Pt(12)
    rp3.font.bold = True
    rp3.font.color.rgb = C_EMERALD
    rp3.space_before = Pt(20)

    # ==========================================================
    # SLIDE 7: 기대 효과 및 향후 발전 방향
    # ==========================================================
    s7 = prs.slides.add_slide(blank_layout)
    add_header(s7, "06. Impact & Future Vision", "지역 소멸 대응 및 정책 의사결정 지원 플랫폼으로의 도약")

    impacts = [
        ("🏛️ 정책 수립 데이터 근거 제공", "지자체별 인프라 결핍도를 객관적 수치로 가시화하여 공공 예산 배분 및 인프라 우선 구축 지역 선정에 기여"),
        ("👥 대국민 정보 접근성 향상", "복잡한 공공데이터를 지도와 AI 음성으로 쉽게 해설하여 소외지역 거주민과 연구자의 알 권리 보장"),
        ("🔮 향후 고도화 로드맵", "• 공공 API 실시간 자동 동기화 주기 단축\n• AI 기반 인구 감소 예측 시뮬레이션 모델 결합\n• 전국 의료/교통 복지 바우처 추천 기능 확장")
    ]
    for i, (ititle, idesc) in enumerate(impacts):
        y = Inches(2.0 + i * 1.65)
        ibox = s7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), y, Inches(11.7), Inches(1.4))
        ibox.fill.solid()
        ibox.fill.fore_color.rgb = C_CARD_LIGHT
        ibox.line.color.rgb = C_CARD_BORDER
        itf = ibox.text_frame
        itf.word_wrap = True

        ip1 = itf.paragraphs[0]
        ip1.text = ititle
        ip1.font.size = Pt(15)
        ip1.font.bold = True
        ip1.font.color.rgb = C_PRIMARY_BLUE

        ip2 = itf.add_paragraph()
        ip2.text = idesc
        ip2.font.size = Pt(12)
        ip2.font.color.rgb = C_DARK_TEXT
        ip2.space_before = Pt(6)

    # ==========================================================
    # SLIDE 8: Q&A / Closing Slide (Dark Modern)
    # ==========================================================
    s8 = prs.slides.add_slide(blank_layout)
    bg8 = s8.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    bg8.fill.solid()
    bg8.fill.fore_color.rgb = C_DARK_BG
    bg8.line.color.rgb = C_DARK_BG

    cbox = s8.shapes.add_textbox(Inches(1.5), Inches(2.2), Inches(10.3), Inches(3.2))
    ctf = cbox.text_frame
    ctf.word_wrap = True

    cp1 = ctf.paragraphs[0]
    cp1.text = "감사합니다"
    cp1.font.size = Pt(44)
    cp1.font.bold = True
    cp1.font.color.rgb = C_WHITE
    cp1.alignment = PP_ALIGN.CENTER

    cp2 = ctf.add_paragraph()
    cp2.text = "대한민국 인프라 소외지역 실시간 정밀 분석 지도"
    cp2.font.size = Pt(20)
    cp2.font.color.rgb = C_CYAN
    cp2.space_before = Pt(16)
    cp2.alignment = PP_ALIGN.CENTER

    cp3 = ctf.add_paragraph()
    cp3.text = "질의응답 (Q&A)"
    cp3.font.size = Pt(16)
    cp3.font.color.rgb = RGBColor(148, 163, 184)
    cp3.space_before = Pt(20)
    cp3.alignment = PP_ALIGN.CENTER

    prs.save(filename)
    # Also save as presentation.pptx as backup
    prs.save("presentation.pptx")
    print(f"Successfully generated: {filename} and presentation.pptx")

if __name__ == "__main__":
    build_presentation()
