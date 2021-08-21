import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

interface IColors {
  color: string;
  text: string;
}

interface IExample {
  title: string;
  size: number;
  weight?: number;
  variant?: {
    title: string;
    weight?: number;
  };
}

interface IFonts {
  name: {
    title: string;
    size: number;
  };
  examples?: Array<IExample>;
}

interface IPalette {
  colors: Array<IColors>;
  palette: Array<string>;
  fonts: IFonts;
}

const Palette = ({colors, palette, fonts}: IPalette) => {
  const colorList = colors.map((color, i) => (
    <div key={i} className="palette__color">
      <div style={{backgroundColor: color.color}}/>
      <span>{color.text}</span>
    </div>
  ));

  const paletteList = palette.map((color, i) => (
    <div key={i} style={{backgroundColor: color}}/>
  ));

  const fontsExamples = fonts.examples?.map((font, i) => (
    <div
      key={i}
      className="palette__fontsExamples"
      style={{fontSize: font.size, fontWeight: font.weight || 400}}
    >
      <span>{font.title}</span>
      <i style={{fontWeight: font?.variant?.weight || 400}}>{font?.variant?.title}</i>
    </div>
  ));

  return (
    <FadeInWhenVisible>
      <div className="content-block">
        <h2 className="content__title">Colors and Typography</h2>
        <span className="content__subtitle">Colors & Typography</span>
        <div className="palette__row">
          <div className="palette__colors">
            {colorList}
          </div>
          <div className="palette__palette">
            {paletteList}
          </div>
        </div>
        {fontsExamples ?
          <div className="palette__row_fonts">
            <div className="palette__fontTitle">
              <span style={{fontSize: fonts.name.size}}>{fonts.name.title}</span>
              <div className="palette__letters palette__letters_upper">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </div>
              <div className="palette__letters palette__letters_lower">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </div>
              <div className="palette__letters">1 2 3 4 5 6 7 8 9 0</div>
            </div>
            <div>{fontsExamples}</div>
          </div> :
          <div className="palette__row_fonts" style={{alignItems: 'flex-end'}}>
            <div className="palette__fontTitle">
              <span style={{fontSize: fonts.name.size}}>{fonts.name.title}</span>
              <div className="palette__letters palette__letters_upper">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </div>
              <div className="palette__letters">1 2 3 4 5 6 7 8 9 0</div>
            </div>
            <div className="palette__fontTitle">
              <div className="palette__letters palette__letters_lower">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </div>
              <div className="palette__letters">1 2 3 4 5 6 7 8 9 0</div>
            </div>
          </div>
        }
      </div>
    </FadeInWhenVisible>
  );
};

export default Palette;
