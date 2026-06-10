import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('首页', () => {
  it('应该渲染主标题', () => {
    render(<Home />);
    expect(screen.getByText(/久合手绘喷绘工艺/)).toBeInTheDocument();
  });

  it('应该渲染副标题', () => {
    render(<Home />);
    const matches = screen.getAllByText(/手绘的温度/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('应该渲染电话号码', () => {
    render(<Home />);
    const matches = screen.getAllByText(/13168873754/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('应该渲染作品展示区域', () => {
    render(<Home />);
    expect(screen.getByText(/看看我们画过什么/)).toBeInTheDocument();
  });

  it('应该渲染三大品类', () => {
    render(<Home />);
    expect(screen.getByText(/三大品类全覆盖/)).toBeInTheDocument();
  });

  it('应该渲染四大理由', () => {
    render(<Home />);
    expect(screen.getByText(/四大理由让全国商家都选我们/)).toBeInTheDocument();
  });

  it('应该渲染四步流程', () => {
    render(<Home />);
    expect(screen.getByText(/四步搞定/)).toBeInTheDocument();
  });

  it('应该渲染客户评价', () => {
    render(<Home />);
    expect(screen.getByText(/合作客户这样说/)).toBeInTheDocument();
  });

  it('应该渲染预约表单', () => {
    render(<Home />);
    const matches = screen.getAllByText(/预约打样/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByPlaceholderText(/姓名或公司名/)).toBeInTheDocument();
  });

  it('应该有 CTA 按钮链接', () => {
    render(<Home />);
    expect(screen.getByText('看作品案例')).toHaveAttribute('href', '#gallery');
    expect(screen.getByText('立即预约打样')).toHaveAttribute('href', '#contact');
  });

  it('应该渲染 Footer 版权信息', () => {
    render(<Home />);
    expect(screen.getByText(/版权所有/)).toBeInTheDocument();
  });

  it('应该有品类折叠按钮', () => {
    render(<Home />);
    expect(screen.getByText(/展开全部/)).toBeInTheDocument();
  });

  it('应该有全国批发市场覆盖', () => {
    render(<Home />);
    expect(screen.getByText(/覆盖全国批发市场商圈/)).toBeInTheDocument();
    expect(screen.getByText('广州')).toBeInTheDocument();
    expect(screen.getByText('杭州')).toBeInTheDocument();
  });

  it('应该有数据统计', () => {
    render(<Home />);
    expect(screen.getByText('20+')).toBeInTheDocument();
    expect(screen.getByText('5000+')).toBeInTheDocument();
  });
});
